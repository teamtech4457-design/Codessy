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

    // Email to admin - Modern Dark Design
    const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { 
      font-family: 'Inter', sans-serif; 
      line-height: 1.6; 
      color: #e2e8f0; 
      margin: 0; 
      padding: 0; 
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    .header { 
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white; 
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .content { 
      padding: 40px 30px; 
    }
    .field { 
      margin-bottom: 25px;
      background: #334155;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #6366f1;
    }
    .label { 
      font-weight: 600; 
      color: #94a3b8;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .value { 
      color: #f1f5f9;
      font-size: 16px;
      font-weight: 500;
    }
    .timestamp {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #334155;
      color: #94a3b8;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 New Contact Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Visitor Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Project Message</div>
        <div class="value">${message}</div>
      </div>
      ${queryMessage ? `
      <div class="field">
        <div class="label">Additional Query</div>
        <div class="value">${queryMessage}</div>
      </div>
      ` : ''}
      <div class="timestamp">
        📅 Submitted on ${new Date().toLocaleString()}
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Email to user - Clean Modern Design
    const userHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { 
      font-family: 'Inter', sans-serif; 
      line-height: 1.6; 
      color: #374151; 
      margin: 0; 
      padding: 0; 
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    .header { 
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      color: white; 
      padding: 50px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .content { 
      padding: 50px 40px; 
    }
    .welcome-section {
      text-align: center;
      margin-bottom: 40px;
    }
    .welcome-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }
    .welcome-section h2 {
      color: #1e293b;
      margin: 0 0 15px 0;
      font-size: 24px;
      font-weight: 600;
    }
    .message-summary {
      background: #f8fafc;
      padding: 30px;
      border-radius: 16px;
      margin: 30px 0;
      border-left: 4px solid #06b6d4;
    }
    .message-summary h3 {
      color: #1e293b;
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
    }
    .contact-info {
      background: #f1f5f9;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
    }
    .contact-info h3 {
      color: #1e293b;
      margin: 0 0 15px 0;
      font-size: 18px;
      font-weight: 600;
    }
    .footer { 
      text-align: center; 
      margin-top: 40px; 
      padding-top: 30px; 
      border-top: 1px solid #e2e8f0; 
      color: #64748b;
      font-size: 14px;
    }
    .highlight {
      color: #06b6d4;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ Thank You!</h1>
    </div>
    <div class="content">
      <div class="welcome-section">
        <div class="welcome-icon">👋</div>
        <h2>Hello ${name},</h2>
        <p style="color: #64748b; font-size: 16px; margin: 0;">
          Thank you for reaching out! We're excited to work with you and will get back to you within <span class="highlight">24 hours</span>.
        </p>
      </div>
      
      <div class="message-summary">
        <h3>📋 Your Message Summary</h3>
        <p style="margin: 15px 0; color: #475569;"><strong>Main Message:</strong><br>${message}</p>
        ${queryMessage ? <p style="margin: 15px 0; color: #475569;"><strong>Additional Query:</strong><br>${queryMessage}</p> : ''}
      </div>

      <div class="contact-info">
        <h3>📞 Stay Connected</h3>
        <p style="margin: 10px 0; color: #475569;"><strong>Email:</strong> shuklamanya99@gmail.com</p>
        <p style="margin: 10px 0; color: #475569;"><strong>Phone:</strong> +91 80055 86588</p>
        <p style="margin: 10px 0; color: #475569;"><strong>Availability:</strong> Mon - Fri, 9AM - 6PM IST</p>
      </div>

      <div class="footer">
        <p style="margin: 0 0 10px 0;"><strong>Best regards,</strong><br>Manya Shukla</p>
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const adminMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 🎯 New Contact: ${name},
      html: adminHtml,
    };

    const userMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: '✨ Thank You for Contacting Manya Shukla!',
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