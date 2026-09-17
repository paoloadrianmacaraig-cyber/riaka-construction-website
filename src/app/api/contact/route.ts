import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    let data: Record<string, string> = {};

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    }

    const first_name = (data.first_name || '').trim();
    const last_name = (data.last_name || '').trim();
    const email = (data.email || '').trim();
    const phone = (data.phone || '').trim();
    const inquiry = (data.inquiry || '').trim();
    const message = (data.message || '').trim();

    if (!first_name || !last_name || !email || !phone || !inquiry || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields to submit your inquiry.' },
        { status: 400 }
      );
    }

    // Name validations (letters, spaces, hyphens, apostrophes, periods only)
    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'. -]+$/;
    if (!nameRegex.test(first_name) || first_name.length < 2) {
      return NextResponse.json(
        { success: false, message: 'First name should only include valid letters and name characters.' },
        { status: 400 }
      );
    }

    if (!nameRegex.test(last_name) || last_name.length < 2) {
      return NextResponse.json(
        { success: false, message: 'Last name should only include valid letters and name characters.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address format (e.g. name@example.com).' },
        { status: 400 }
      );
    }

    // Contact number validation (numbers only with optional +, spaces, hyphens, and parentheses)
    const phoneCharsRegex = /^[0-9+\s\-()]+$/;
    const phoneDigits = phone.replace(/\D/g, '');
    if (!phoneCharsRegex.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { success: false, message: 'Contact number should contain numbers only (7 to 15 digits).' },
        { status: 400 }
      );
    }

    const payload = {
      first_name,
      last_name,
      email,
      phone,
      inquiry,
      message,
    };

    // Check for XAMPP PHPMailer script
    const xamppPhp = 'C:\\xampp\\php\\php.exe';
    const xamppMailScript = 'C:\\xampp\\htdocs\\phpmailer\\mail.php';

    if (fs.existsSync(xamppPhp) && fs.existsSync(xamppMailScript)) {
      const phpResult = await new Promise<{ success: boolean; message: string }>((resolve) => {
        const child = spawn(xamppPhp, [xamppMailScript]);

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', (chunk) => {
          stdout += chunk.toString();
        });

        child.stderr.on('data', (chunk) => {
          stderr += chunk.toString();
        });

        child.on('close', (code) => {
          if (code === 0) {
            try {
              const parsed = JSON.parse(stdout.trim());
              resolve({
                success: parsed.success ?? true,
                message: parsed.message || 'Inquiry sent successfully.',
              });
            } catch {
              resolve({
                success: true,
                message: 'Thank you! Your inquiry has been received.',
              });
            }
          } else {
            console.error('[PHPMailer stderr]:', stderr);
            try {
              const parsed = JSON.parse(stdout.trim());
              resolve({
                success: false,
                message: parsed.message || 'Failed to dispatch email via PHPMailer.',
              });
            } catch {
              resolve({
                success: false,
                message: 'PHPMailer encountered an issue sending your message.',
              });
            }
          }
        });

        child.stdin.write(JSON.stringify(payload));
        child.stdin.end();
      });

      if (!phpResult.success) {
        return NextResponse.json(phpResult, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: phpResult.message,
      });
    }

    // Fallback if XAMPP is not present
    console.log('[RIAKA Contact Form Fallback]:', payload);
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our team will review your project details and get back to you promptly to schedule a consultation.',
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again or contact us directly via phone.' },
      { status: 500 }
    );
  }
}
