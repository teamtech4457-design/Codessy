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

    // ✅ Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // ✅ Admin Email (Simple)
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      ${queryMessage ? `<p><strong>Query:</strong> ${queryMessage}</p>` : ""}
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `;

    // ✅ User Confirmation Email (Styled HTML)
    const userHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f5f7fa; padding: 30px;">
      <div style="max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); color: white; padding: 25px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          <p style="margin: 5px 0 0;">We’ve received your message 🎉</p>
        </div>

        <!-- Body -->
        <div style="padding: 25px 20px; color: #333;">
          <p style="font-size: 16px;">Hi <strong>${name}</strong>,</p>
          <p style="font-size: 15px; line-height: 1.6;">
            Thank you for contacting us! We appreciate you taking the time to reach out.
            Our team will review your message and get back to you within <strong>24 hours</strong>.
          </p>

          <div style="margin: 25px 0; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; padding: 15px;">
            <h3 style="margin-top: 0; color: #3b82f6;">Your Message Summary:</h3>
            <p><strong>Message:</strong> ${message}</p>
            ${queryMessage ? `<p><strong>Query:</strong> ${queryMessage}</p>` : ""}
          </div>

          <div style="margin-top: 25px;">
            <h3 style="color: #3b82f6; margin-bottom: 5px;">Contact Information:</h3>
            <p style="margin: 4px 0;"><strong>Email:</strong> shuklamanya99@gmail.com</p>
            <p style="margin: 4px 0;"><strong>Phone:</strong> +91 80055 86588</p>
          </div>

          <p style="margin-top: 25px; font-size: 14px; color: #555;">
            Warm regards,<br/>
            <strong>Manya Shukla</strong><br/>
            <span style="color: #888;">Digital Campaigns | Codessy</span>
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #f3f4f6; text-align: center; padding: 15px; font-size: 12px; color: #777;">
          <p style="margin: 0;">This is an automated confirmation email. Please do not reply.</p>
        </div>
      </div>
    </div>
    `;

    // ✅ Send both emails
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact from ${name}`,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: `"Manya Shukla" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting us! 🌸",
      html: userHtml,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error sending email:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error("Unknown error:", err);
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
