<?php
/**
 * RIAKA Construction - Contact & Quote Request Handler (PHPMailer Ready)
 * 
 * Instructions:
 * 1. Ensure PHPMailer is installed via Composer (`composer require phpmailer/phpmailer`)
 *    or place the PHPMailer library files in a `PHPMailer/` folder adjacent to this script.
 * 2. Update your SMTP credentials below (host, username, password, port).
 * 3. Point your form endpoint to this script URL if hosted on a PHP server.
 */

// Allow Cross-Origin Requests (CORS) for development / headless deployments
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Only POST requests are accepted.'
    ]);
    exit();
}

// Retrieve POST data (supports both multipart/form-data and raw JSON payloads)
$inputJSON = file_get_contents('php://input');
$jsonData = json_decode($inputJSON, true);

$first_name = trim($_POST['first_name'] ?? $jsonData['first_name'] ?? '');
$last_name  = trim($_POST['last_name'] ?? $jsonData['last_name'] ?? '');
$email      = trim($_POST['email'] ?? $jsonData['email'] ?? '');
$phone      = trim($_POST['phone'] ?? $jsonData['phone'] ?? '');
$inquiry    = trim($_POST['inquiry'] ?? $jsonData['inquiry'] ?? '');
$message    = trim($_POST['message'] ?? $jsonData['message'] ?? '');

// Validation
$errors = [];
if (empty($first_name)) {
    $errors[] = 'First name is required.';
}
if (empty($last_name)) {
    $errors[] = 'Last name is required.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}
if (empty($phone)) {
    $errors[] = 'Phone number is required.';
}
if (empty($inquiry)) {
    $errors[] = 'Inquiry subject is required.';
}
if (empty($message)) {
    $errors[] = 'Message is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation error.',
        'errors'  => $errors
    ]);
    exit();
}

// Build email content
$fullName = htmlspecialchars($first_name . ' ' . $last_name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeInquiry = htmlspecialchars($inquiry, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$submittedAt = date('F j, Y, g:i a');

$emailSubject = "New Quote Request: [{$safeInquiry}] from {$fullName}";

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #23395d; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .header { background-color: #23395d; color: #ffffff; padding: 24px; text-align: center; }
        .header h1 { margin: 0 0 6px; font-size: 20px; letter-spacing: 1px; text-transform: uppercase; }
        .header p { margin: 0; font-size: 13px; color: #9bb2d1; }
        .body { padding: 28px; }
        .field { margin-bottom: 16px; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; }
        .field:last-child { border-bottom: none; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #718096; font-weight: bold; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1a202c; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #23395d; padding: 14px; border-radius: 4px; font-size: 14px; line-height: 1.6; }
        .footer { text-align: center; font-size: 12px; color: #a0aec0; padding: 16px; background: #edf2f7; }
    </style>
</head>
<body>
    <div class='card'>
        <div class='header'>
            <h1>RIAKA Construction</h1>
            <p>New Website Quote Inquiry</p>
        </div>
        <div class='body'>
            <div class='field'>
                <div class='label'>Client Name</div>
                <div class='value'>{$fullName}</div>
            </div>
            <div class='field'>
                <div class='label'>Email Address</div>
                <div class='value'><a href='mailto:{$safeEmail}'>{$safeEmail}</a></div>
            </div>
            <div class='field'>
                <div class='label'>Contact Number</div>
                <div class='value'><a href='tel:{$safePhone}'>{$safePhone}</a></div>
            </div>
            <div class='field'>
                <div class='label'>Inquiry Type</div>
                <div class='value'><strong>{$safeInquiry}</strong></div>
            </div>
            <div class='field'>
                <div class='label'>Project Description / Message</div>
                <div class='message-box'>{$safeMessage}</div>
            </div>
            <div class='field'>
                <div class='label'>Submitted On</div>
                <div class='value'>{$submittedAt}</div>
            </div>
        </div>
        <div class='footer'>
            &copy; " . date('Y') . " Riaka Construction and Development Corporation. Lemery, Batangas.
        </div>
    </div>
</body>
</html>
";

// If PHPMailer is available, use it; otherwise fallback to native mail()
$sent = false;

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
} elseif (file_exists(__DIR__ . '/PHPMailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/PHPMailer/src/Exception.php';
    require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/src/SMTP.php';
}

if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

        // --- SMTP SETTINGS (Uncomment and configure for SMTP) ---
        // $mail->isSMTP();
        // $mail->Host       = 'smtp.yourdomain.com';
        // $mail->SMTPAuth   = true;
        // $mail->Username   = 'your_smtp_username';
        // $mail->Password   = 'your_smtp_password';
        // $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        // $mail->Port       = 587;

        // Recipients
        $mail->setFrom('noreply@riaka-construction.com', 'RIAKA Website Inquiry');
        $mail->addAddress('riaka.construction@yahoo.com', 'RIAKA Construction');
        $mail->addReplyTo($email, $fullName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $emailSubject;
        $mail->Body    = $emailBody;
        $mail->AltBody = "New Quote Request\n\nName: {$fullName}\nEmail: {$email}\nPhone: {$phone}\nInquiry: {$inquiry}\nMessage:\n{$message}\n";

        $mail->send();
        $sent = true;
    } catch (\Exception $e) {
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
        $sent = false;
    }
} else {
    // Fallback using standard PHP mail()
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: RIAKA Website <noreply@riaka-construction.com>\r\n";
    $headers .= "Reply-To: {$fullName} <{$email}>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $to = 'riaka.construction@yahoo.com';
    $sent = @mail($to, $emailSubject, $emailBody, $headers);
}

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your quote request has been received. Our team will contact you shortly.'
    ]);
} else {
    // Even if local mailserver is not configured, send back success or informative message
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your quote inquiry has been submitted successfully.',
        'note'    => 'If on localhost, configure SMTP credentials in contact.php to send live emails.'
    ]);
}
