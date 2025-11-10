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

    // ✅ Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // ✅ Styled Admin Email
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #2d3436; text-align: center;">📩 New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
          ${
            queryMessage
              ? `<p><strong>Query:</strong><br>${queryMessage}</p>`
              : ""
          }
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 14px; color: #636e72;">Submitted At: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // ✅ Styled User Email
    const userHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; background-color: #fafafa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; padding: 25px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
          <h2 style="text-align: center; color: #4a90e2;">Thank You for Contacting Us, ${name}! 🌟</h2>
          <p style="font-size: 16px; color: #333;">We’ve received your message and will get back to you shortly.</p>
          
          <div style="background: #f0f8ff; border-left: 4px solid #4a90e2; padding: 10px 15px; margin-top: 15px;">
            <p><strong>Your Message:</strong><br>${message}</p>
            ${
              queryMessage
                ? `<p><strong>Your Query:</strong><br>${queryMessage}</p>`
                : ""
            }
          </div>

          <p style="margin-top: 20px; font-size: 15px; color: #555;">
            In the meantime, you can explore our website for more information.<br>
            Thank you for reaching out to <strong>Codessy Team</strong> 💻
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">
          <p style="text-align: center; color: #888; font-size: 13px;">
            Best Regards,<br>
            <strong>Manya Shukla</strong><br>
            Codessy Support Team
          </p>
        </div>
      </div>
    `;

    // ✅ Send to Admin
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact from ${name}`,
      html: adminHtml,
    });

    // ✅ Send to User
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Thank you for contacting us!",
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
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
