import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, queryMessage } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check env variables
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_EMAIL_PASSWORD) {
      console.error('Missing environment variables for email configuration');
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    console.log("Email config check:", {
      user: process.env.ADMIN_EMAIL,
      passExists: !!process.env.ADMIN_EMAIL_PASSWORD,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // Admin email template
    const adminHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #3b82f6; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0;">New Contact Form Submission</h1>
  </div>
  <div style="padding: 20px; background: #f9f9f9;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    ${queryMessage ? `<p><strong>Query:</strong> ${queryMessage}</p>` : ''}
    <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
  </div>
</div>
    `;

    // User confirmation email template
    const userHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #10b981; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0;">Thank You for Reaching Out!</h1>
  </div>
  <div style="padding: 20px; background: #f9f9f9;">
    <div style="text-align: center; margin: 20px 0;">
      <h2>Hello ${name},</h2>
      <p>Thank you for contacting us! We have received your message and will get back to you within 24 hours.</p>
    </div>
    
    <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3>Your Message Summary:</h3>
      <p><strong>Message:</strong> ${message}</p>
      ${queryMessage ? `<p><strong>Query:</strong> ${queryMessage}</p>` : ''}
    </div>

    <div>
      <h3>Our Contact Information:</h3>
      <p><strong>Email:</strong> shuklamanya99@gmail.com</p>
      <p><strong>Phone:</strong> +91 80055 86588</p>
    </div>

    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
      <p>Best regards,<br><strong>Manya Shukla</strong></p>
      <p><small>This is an automated confirmation email. Please do not reply.</small></p>
    </div>
  </div>
</div>
    `;

    // Mail options
    const adminMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: adminHtml,
    };

    const userMailOptions = {
      from: process.env.ADMIN_EMAIL,
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
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
