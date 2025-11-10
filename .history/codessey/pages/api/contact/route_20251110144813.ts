import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemaile';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const body = await req.json();
  const { name, email, message, queryMessage } = body;

  if (!name || !email || !message || !queryMessage) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Query Message:</strong><br/>${queryMessage}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! We have received your message as below:</p>
        <hr/>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Query Message:</strong><br/>${queryMessage}</p>
        <hr/>
        <p>We will get back to you soon.</p>
        <p>Best regards,<br/>Your Company Name</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
