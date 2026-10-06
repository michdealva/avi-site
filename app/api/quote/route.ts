import { NextResponse } from "next/server";
import { EMAIL } from "@/data/content";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, brand, urgency, description } = body;

    // Validate required fields
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    const htmlBody = `
      <h2>New Quote Request from AVI Website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Machine Brand</td><td style="padding:8px;border-bottom:1px solid #eee;">${brand || "Not specified"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Urgency</td><td style="padding:8px;border-bottom:1px solid #eee;">${urgency || "Not specified"}</td></tr>
      </table>
      <h3 style="margin-top:24px;">Issue Description</h3>
      <p style="white-space:pre-wrap;">${description || "No description provided."}</p>
    `;

    // Try Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Resend returns { error } instead of throwing, so check it explicitly
      const { error } = await resend.emails.send({
        from: "AVI Website <notifications@embi-studio.com>",
        to: process.env.QUOTE_TO_EMAIL || EMAIL,
        bcc: "michelle@embi-studio.com",
        replyTo: email,
        subject: `New Quote Request: ${company}`,
        html: htmlBody,
      });
      if (error) throw new Error(`Resend: ${error.message}`);
    } else if (process.env.VERCEL_ENV === "production") {
      // Never tell a customer "sent" when nothing can be delivered
      throw new Error("RESEND_API_KEY is not configured");
    } else {
      // Console fallback for local dev without a Resend key
      console.log("New quote request:", { name, company, email, phone, brand, urgency, description });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
