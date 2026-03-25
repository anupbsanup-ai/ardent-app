import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, message, type } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from:    `${process.env.NEXT_PUBLIC_SITE_NAME ?? "Ardent"} <onboarding@resend.dev>`,
      to:      [process.env.CONTACT_EMAIL ?? "hello@ardentrealty.com"],
      replyTo: email,
      subject: `New ${type ?? "contact"} inquiry from ${name}`,
      html: `
        <h2>New Inquiry — ${type ?? "Contact"}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
