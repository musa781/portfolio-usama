import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Validation Checks
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All form fields are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "sharifusama351@gmail.com";
    const gmailPass = process.env.GMAIL_PASS;

    // 2. Fallback reminder if credentials are not configured yet
    if (!gmailPass) {
      console.warn("SMTP credentials are not configured in environment variables (.env.local).");
      return NextResponse.json(
        { 
          error: "SMTP credentials not configured. Please set GMAIL_PASS in your .env.local file.",
          details: "To receive emails, please configure GMAIL_USER and GMAIL_PASS (using a Gmail App Password)."
        },
        { status: 501 }
      );
    }

    // 3. Configure SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    // 4. Compose Email Body
    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      to: "sharifusama351@gmail.com",
      replyTo: email,
      subject: `📧 Portfolio Inquiry: ${subject}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #1e293b; border-radius: 12px; background-color: #0b1329; color: #f8fafc;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #1e293b; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
          <p style="margin: 15px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a></p>
          <p style="margin: 15px 0;"><strong>Subject:</strong> ${subject}</p>
          
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #8b5cf6; background-color: #0f172a; border-radius: 4px; line-height: 1.6;">
            <p style="margin: 0; font-style: italic; color: #cbd5e1;">"${message}"</p>
          </div>
          
          <p style="font-size: 11px; color: #64748b; margin-top: 30px; text-align: center; border-top: 1px solid #1e293b; padding-top: 15px;">
            This email was automatically generated and sent from your Next.js portfolio website.
          </p>
        </div>
      `
    };

    // 5. Send Mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Your message was sent successfully!" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Email API Route Error:", error);
    return NextResponse.json(
      { error: "Failed to send email message. Please try again later." },
      { status: 500 }
    );
  }
}
