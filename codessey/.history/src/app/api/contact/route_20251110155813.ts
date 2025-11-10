import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, queryMessage } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_EMAIL_PASSWORD) {
      console.error("Missing environment variables for email configuration");
      return NextResponse.json(
        { error: "Email configuration missing" },
        { status: 500 }
      );
    }

    // ✅ Transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // ✅ Email templates
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      ${queryMessage ? `<p><strong>Query:</strong> ${queryMessage}</p>` : ""}
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `;

    const userHtml = `
      <h2>Thank You for Contacting Us, ${name}!</h2>
      <p>We’ve received your message and will get back to you soon.</p>
      <p><strong>Your message:</strong> ${message}</p>
      ${queryMessage ? `<p><strong>Your query:</strong> ${queryMessage}</p>` : ""}
      <p>Best regards,<br/>Manya Shukla</p>
    `;

    // ✅ Send both emails
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact from ${name}`,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Thank you for contacting us!",
      html: userHtml,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}
