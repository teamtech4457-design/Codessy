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

    // Email to admin
    const adminMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: New Contact Form Submission from ${name},
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #3b82f6; }
              .value { padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #3b82f6; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                ${queryMessage ? `
                <div class="field">
                  <div class="label">Query:</div>
                  <div class="value">${queryMessage}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Submission Time:</div>
                  <div class="value">${new Date().toLocaleString()}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #10b981; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .thank-you { text-align: center; margin: 20px 0; }
              .details { background: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <div class="thank-you">
                  <h2>Hello ${name},</h2>
                  <p>Thank you for contacting us! We have received your message and will get back to you within 24 hours.</p>
                </div>
                
                <div class="details">
                  <h3>Your Message Summary:</h3>
                  <p><strong>Message:</strong> ${message}</p>
                  ${queryMessage ? <p><strong>Query:</strong> ${queryMessage}</p> : ''}
                </div>

                <div class="contact-info">
                  <h3>Our Contact Information:</h3>
                  <p><strong>Email:</strong> shuklamanya99@gmail.com</p>
                  <p><strong>Phone:</strong> +91 80055 86588</p>
                </div>

                <div class="footer">
                  <p>Best regards,<br>Manya Shukla</p>
                  <p><small>This is an automated confirmation email. Please do not reply to this message.</small></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
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