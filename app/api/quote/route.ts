import { NextResponse } from "next/server";

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

      await resend.emails.send({
        from: "AVI Website <notifications@embi-studio.com>",
        to: "michelle@embi-studio.com",
        subject: `New Quote Request: ${company}`,
        html: htmlBody,
      });
    } else {
      // Console fallback when no Resend key
      console.log("=== NEW QUOTE REQUEST ===");
      console.log(`Name: ${name}`);
      console.log(`Company: ${company}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || "N/A"}`);
      console.log(`Brand: ${brand || "N/A"}`);
      console.log(`Urgency: ${urgency || "N/A"}`);
      console.log(`Description: ${description || "N/A"}`);
      console.log("=========================");
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
