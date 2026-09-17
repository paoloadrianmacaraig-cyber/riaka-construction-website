<?php
/**
 * RIAKA Construction & Development Corp.
 * PHPMailer Contact & Consultation Request Service
 */

// Report errors internally, avoid breaking JSON output with raw notices
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set CORS headers for Next.js / frontend requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept');

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? (php_sapi_name() === 'cli' ? 'POST' : 'GET');

// Handle preflight OPTIONS request
if ($requestMethod === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Locate and require PHPMailer library files
$phpMailerBase = null;
if (file_exists(__DIR__ . '/phpmailer/src/PHPMailer.php')) {
    $phpMailerBase = __DIR__ . '/phpmailer/src';
} elseif (file_exists(__DIR__ . '/src/PHPMailer.php')) {
    $phpMailerBase = __DIR__ . '/src';
}

if ($phpMailerBase) {
    require_once $phpMailerBase . '/Exception.php';
    require_once $phpMailerBase . '/PHPMailer.php';
    require_once $phpMailerBase . '/SMTP.php';
} elseif (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
} else {
    http_response_code(500);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode([
        'success' => false,
        'message' => 'PHPMailer library files not found in ' . __DIR__ . '/phpmailer/src/'
    ]);
    exit(1);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Read input from php://input (web JSON) or php://stdin (CLI / child_process)
$rawInput = file_get_contents('php://input');
if (empty($rawInput)) {
    $rawInput = @file_get_contents('php://stdin');
}

$jsonData = [];
if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $jsonData = $decoded;
    }
}

// Detect if caller wants JSON (fetch, AJAX, or CLI)
$acceptHeader = $_SERVER['HTTP_ACCEPT'] ?? '';
$contentType  = $_SERVER['CONTENT_TYPE'] ?? '';
$isJson = (
    !empty($jsonData) ||
    strpos($acceptHeader, 'application/json') !== false ||
    strpos($contentType, 'application/json') !== false ||
    php_sapi_name() === 'cli'
);

// Extract form fields with fallbacks
$firstName = trim($_POST['first_name'] ?? $jsonData['first_name'] ?? '');
$lastName  = trim($_POST['last_name'] ?? $jsonData['last_name'] ?? '');
$fullName  = trim($_POST['name'] ?? $jsonData['name'] ?? $_POST['full_name'] ?? $jsonData['full_name'] ?? '');

if (empty($fullName) && (!empty($firstName) || !empty($lastName))) {
    $fullName = trim($firstName . ' ' . $lastName);
}

$email   = trim($_POST['email'] ?? $jsonData['email'] ?? '');
$phone   = trim($_POST['phone'] ?? $jsonData['phone'] ?? $_POST['contact'] ?? $jsonData['contact'] ?? 'Not provided');
$inquiry = trim($_POST['inquiry'] ?? $jsonData['inquiry'] ?? $_POST['subject'] ?? $jsonData['subject'] ?? 'General Inquiry & Consultation');
$message = trim($_POST['message'] ?? $jsonData['message'] ?? $_POST['comments'] ?? $jsonData['comments'] ?? '');

// Browser GET request with no params -> return service status
if ($requestMethod === 'GET' && empty($email) && empty($message)) {
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode([
        'status'  => 'online',
        'service' => 'RIAKA Construction PHPMailer Service is active and ready.',
        'smtp'    => 'smtp.gmail.com:465 (SSL)'
    ]);
    exit(0);
}

// Validate mandatory fields
if (empty($fullName) || empty($email) || empty($message)) {
    http_response_code(400);
    if ($isJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => false,
            'message' => 'Please fill out all required fields: Name, Email, and Message.'
        ]);
    } else {
        echo "<script>alert('Please fill out all required fields: Name, Email, and Message.'); window.history.back();</script>";
    }
    exit(1);
}

// Name validation (letters, spaces, hyphens, apostrophes, and periods only)
if (!preg_match("/^[a-zA-Z\p{L}\s'\.\-]+$/u", $fullName)) {
    http_response_code(400);
    if ($isJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => false,
            'message' => 'Name should only include letters and valid name characters.'
        ]);
    } else {
        echo "<script>alert('Name should only include letters and valid name characters.'); window.history.back();</script>";
    }
    exit(1);
}

// Email format validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    if ($isJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid email address format.'
        ]);
    } else {
        echo "<script>alert('Please enter a valid email address.'); window.history.back();</script>";
    }
    exit(1);
}

// Contact number validation (numbers only with optional +, spaces, hyphens, and parentheses)
$phoneDigits = preg_replace('/\D/', '', $phone);
if (!empty($phone) && $phone !== 'Not provided' && (!preg_match('/^[0-9+\s\-()]+$/', $phone) || strlen($phoneDigits) < 7 || strlen($phoneDigits) > 15)) {
    http_response_code(400);
    if ($isJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => false,
            'message' => 'Contact number should contain numbers only (7 to 15 digits).'
        ]);
    } else {
        echo "<script>alert('Contact number should contain numbers only.'); window.history.back();</script>";
    }
    exit(1);
}

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTP_USER') ?: 'your-email@gmail.com';
    $mail->Password   = getenv('SMTP_PASS') ?: 'YOUR_GMAIL_APP_PASSWORD_HERE';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Port 465 SSL
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';
    $mail->Timeout    = 15;

    // Sender & Recipient setup
    // Gmail requires From to match authenticated username
    $authEmail        = getenv('SMTP_USER') ?: 'your-email@gmail.com';
    $mail->setFrom($authEmail, 'RIAKA Website - ' . $fullName);
    $mail->addAddress($authEmail, 'RIAKA Construction');
    $mail->addReplyTo($email, $fullName);

    // Email Body Formatting
    $safeFullName = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
    $safeEmail    = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safePhone    = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $safeInquiry  = htmlspecialchars($inquiry, ENT_QUOTES, 'UTF-8');
    $safeMessage  = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $submittedAt  = date('F j, Y, g:i a');

    $mail->isHTML(true);
    $mail->Subject = "New RIAKA Inquiry: [{$safeInquiry}] from {$safeFullName}";

    $mail->Body = "
    <div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;'>
      <div style='background: #23395d; color: #ffffff; padding: 24px; text-align: center;'>
        <h1 style='margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1.5px;'>RIAKA Construction</h1>
        <p style='margin: 6px 0 0; font-size: 13px; color: #9ed4ff;'>Website Inquiry & Consultation Request</p>
      </div>
      <div style='padding: 26px; color: #2d3748; line-height: 1.6;'>
        <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
          <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Client Name</span>
          <strong style='font-size: 16px; color: #1a202c;'>{$safeFullName}</strong>
        </div>
        <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
          <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Email Address</span>
          <a href='mailto:{$safeEmail}' style='color: #2b6cb0; text-decoration: none;'>{$safeEmail}</a>
        </div>
        <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
          <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Contact Number</span>
          <a href='tel:{$safePhone}' style='color: #2b6cb0; text-decoration: none;'>{$safePhone}</a>
        </div>
        <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
          <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Inquiry Type</span>
          <span style='font-size: 15px; font-weight: bold; color: #23395d;'>{$safeInquiry}</span>
        </div>
        <div style='margin-top: 18px;'>
          <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block; margin-bottom: 6px;'>Project Details / Message</span>
          <div style='background: #f7fafc; border-left: 4px solid #23395d; padding: 14px; border-radius: 4px; font-size: 14px;'>{$safeMessage}</div>
        </div>
        <p style='font-size: 11px; color: #a0aec0; margin-top: 20px; text-align: right;'>Submitted on: {$submittedAt}</p>
      </div>
      <div style='background: #edf2f7; padding: 14px; text-align: center; font-size: 11px; color: #718096;'>
        RIAKA Construction & Development Corp. &bull; Lemery, Batangas, Philippines
      </div>
    </div>
    ";

    $mail->AltBody = "Website Inquiry\n\nName: {$fullName}\nEmail: {$email}\nPhone: {$phone}\nInquiry: {$inquiry}\n\nMessage:\n{$message}\n\nSubmitted on: {$submittedAt}";

    $mail->send();

    if ($isJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your inquiry has been sent successfully. Our team will contact you promptly to schedule a consultation.'
        ]);
    } else {
        echo "<script>alert('Thank you! Your inquiry was sent successfully.'); window.location.href = 'index.php';</script>";
    }
    exit(0);

} catch (Exception $e) {
    http_response_code(500);
    if ($isJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send message via PHPMailer: ' . $mail->ErrorInfo
        ]);
    } else {
        echo "<script>alert('Failed to send email: " . addslashes($mail->ErrorInfo) . "'); window.history.back();</script>";
    }
    exit(1);
}
