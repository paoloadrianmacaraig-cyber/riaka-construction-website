import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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

    // 1. Send via Nodemailer if SMTP credentials are configured (Vercel & production)
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const safeFullName = escapeHtml(`${first_name} ${last_name}`);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeInquiry = escapeHtml(inquiry);
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
        const submittedAt = new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Manila',
          dateStyle: 'long',
          timeStyle: 'short',
        });

        await transporter.sendMail({
          from: `"RIAKA Website - ${first_name} ${last_name}" <${smtpUser}>`,
          to: smtpUser,
          replyTo: email,
          subject: `New RIAKA Inquiry: [${inquiry}] from ${first_name} ${last_name}`,
          text: `New Website Inquiry\n\nName: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nInquiry: ${inquiry}\n\nMessage:\n${message}\n\nSubmitted on: ${submittedAt}`,
          html: `
          <div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;'>
            <div style='background: #23395d; color: #ffffff; padding: 24px; text-align: center;'>
              <h1 style='margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1.5px;'>RIAKA Construction</h1>
              <p style='margin: 6px 0 0; font-size: 13px; color: #9ed4ff;'>New Website Inquiry & Consultation Request</p>
            </div>
            <div style='padding: 26px; color: #2d3748; line-height: 1.6;'>
              <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
                <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Client Name</span>
                <strong style='font-size: 16px; color: #1a202c;'>${safeFullName}</strong>
              </div>
              <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
                <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Email Address</span>
                <a href='mailto:${safeEmail}' style='color: #2b6cb0; text-decoration: none;'>${safeEmail}</a>
              </div>
              <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
                <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Contact Number</span>
                <a href='tel:${safePhone}' style='color: #2b6cb0; text-decoration: none;'>${safePhone}</a>
              </div>
              <div style='margin-bottom: 14px; border-bottom: 1px solid #edf2f7; padding-bottom: 10px;'>
                <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block;'>Inquiry Type</span>
                <span style='font-size: 15px; font-weight: bold; color: #23395d;'>${safeInquiry}</span>
              </div>
              <div style='margin-top: 18px;'>
                <span style='font-size: 11px; text-transform: uppercase; font-weight: bold; color: #718096; display: block; margin-bottom: 6px;'>Project Details / Message</span>
                <div style='background: #f7fafc; border-left: 4px solid #23395d; padding: 14px; border-radius: 4px; font-size: 14px;'>${safeMessage}</div>
              </div>
              <p style='font-size: 11px; color: #a0aec0; margin-top: 20px; text-align: right;'>Submitted on: ${submittedAt}</p>
            </div>
            <div style='background: #edf2f7; padding: 14px; text-align: center; font-size: 11px; color: #718096;'>
              RIAKA Construction & Development Corp. &bull; Lemery, Batangas, Philippines
            </div>
          </div>
          `,
        });

        return NextResponse.json({
          success: true,
          message: 'Thank you! Your inquiry has been sent successfully. Our team will contact you promptly to schedule a consultation.',
        });
      } catch (nodemailerErr) {
        console.error('[Nodemailer error]:', nodemailerErr);
        return NextResponse.json(
          { success: false, message: 'Failed to send inquiry via email. Please check SMTP configuration.' },
          { status: 500 }
        );
      }
    }

    // 2. Check for local XAMPP PHPMailer script (fallback for local development)
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

    // 3. Fallback if neither SMTP nor XAMPP is available
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
