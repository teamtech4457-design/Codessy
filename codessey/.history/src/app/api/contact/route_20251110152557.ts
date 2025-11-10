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

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // Admin email HTML
    const adminHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #3b82f6; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0;">New Contact Form Submission</h1>
  </div>
  <div style="padding: 20px; background: #f9f9f9;">
    <div style="margin-bottom: 15px;">
      <div style="font-weight: bold; color: #3b82f6; margin-bottom: 5px;">Name:</div>
      <div style="padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #3b82f6;">${name}</div>
    </div>
    <div style="margin-bottom: 15px;">
      <div style="font-weight: bold; color: #3b82f6; margin-bottom: 5px;">Email:</div>
      <div style="padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #3b82f6;">${email}</div>
    </div>
    <div style="margin-bottom: 15px;">
      <div style="font-weight: bold; color: #3b82f6; margin-bottom: 5px;">Message:</div>
      <div style="padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #3b82f6;">${message}</div>
    </div>
    ${queryMessage ? `
    <div style="margin-bottom: 15px;">
      <div style="font-weight: bold; color: #3b82f6; margin-bottom: 5px;">Query:</div>
      <div style="padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #3b82f6;">${queryMessage}</div>
    </div>
    ` : ''}
    <div style="margin-bottom: 15px;">
      <div style="font-weight: bold; color: #3b82f6; margin-bottom: 5px;">Submission Time:</div>
      <div style="padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #3b82f6;">${new Date().toLocaleString()}</div>
    </div>
  </div>
</div>
    `;

    // User email HTML
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
      ${queryMessage ? <p><strong>Query:</strong> ${queryMessage}</p> : ''}
    </div>

    <div>
      <h3>Our Contact Information:</h3>
      <p><strong>Email:</strong> shuklamanya99@gmail.com</p>
      <p><strong>Phone:</strong> +91 80055 86588</p>
    </div>

    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
      <p>Best regards,<br>Manya Shukla</p>
      <p><small>This is an automated confirmation email. Please do not reply to this message.</small></p>
    </div>
  </div>
</div>
    `;

    const adminMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: New Contact Form Submission from ${name},
      html: adminHtml,
    };

    const userMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Thank you for contacting us!',
      html: userHtml,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
}