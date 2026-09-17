import { NextResponse } from 'next/server';

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

    const { first_name, last_name, email, phone, inquiry, message } = data;

    if (!first_name || !last_name || !email || !phone || !inquiry || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Log the inquiry for development debugging
    console.log('[RIAKA Contact Form Submission]:', {
      fullName: `${first_name} ${last_name}`,
      email,
      phone,
      inquiry,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your quote request has been received. Our team will review your project details and get back to you promptly.',
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again or contact us directly via phone.' },
      { status: 500 }
    );
  }
}
