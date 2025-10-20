import nodemailer from "nodemailer";
import { NextResponse } from "next/server"; // ✅ add this line

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, country, timezone, technology, jobDescription } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "youremail@gmail.com",
      subject: `New Contact Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Time Zone:</b> ${timezone}</p>
        <p><b>Technology:</b> ${technology}</p>
        <p><b>Job Description:</b> ${jobDescription || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }); // ✅ use NextResponse
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
