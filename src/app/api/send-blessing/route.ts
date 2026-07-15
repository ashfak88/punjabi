import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, relation, message, timestamp } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Name and message are required" },
        { status: 400 }
      );
    }

    const ownerEmail = "zetrontechin@gmail.com";

    // Send email to owner via FormSubmit AJAX service
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${ownerEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `🕊️ New Wedding Blessing from ${name} (${relation || "Guest"})`,
        _template: "table",
        "Guest Name": name,
        "Relationship": relation || "Guest",
        "Heartfelt Blessing / Prayer": message,
        "Submitted Time": timestamp || new Date().toLocaleString(),
        "Wedding Card": "Royal Wedding Invitation (Amina & Yusuf)",
      }),
    });

    const formSubmitResult = await formSubmitResponse.json().catch(() => ({}));

    console.log(`[Email Service] Blessing sent to ${ownerEmail}:`, formSubmitResult);

    return NextResponse.json({
      success: true,
      message: `Heartfelt blessing delivered to ${ownerEmail}`,
      details: formSubmitResult,
    });
  } catch (error: any) {
    console.error("Error sending blessing email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
