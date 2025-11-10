import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, queryMessage } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_EMAIL_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create transporter with better configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Email transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration failed' },
        { status: 500 }
      );
    }

    // Email templates (keep your existing HTML templates)
    const adminHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <!-- Your existing admin HTML template -->
</div>
    `;

    const userHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <!-- Your existing user HTML template -->
</div>
    `;

    const adminMailOptions = {
      from: "Portfolio Contact" <${process.env.ADMIN_EMAIL}>,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: New Contact Form Submission from ${name},
      html: adminHtml,
    };

    const userMailOptions = {
      from: "Manya Shukla" <${process.env.ADMIN_EMAIL}>,
      to: email,
      subject: 'Thank you for contacting us!',
      html: userHtml,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Detailed error sending email:', error);
    
    let errorMessage = 'Failed to send message';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}