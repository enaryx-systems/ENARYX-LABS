import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 }
    );
  }

  const { name, email, company, budget, message, website } = parsed.data;

  // Honeypot tripped — pretend success, drop the message.
  if (website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Enaryx Labs <onboarding@resend.dev>";

  const text = [
    `New project inquiry — ${site.domain}`,
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || "—"}`,
    `Budget:  ${budget}`,
    "",
    message,
  ].join("\n");

  if (!apiKey) {
    // No email provider configured yet — log so nothing is silently lost in dev.
    console.info("[contact] (no RESEND_API_KEY set)\n" + text);
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Project inquiry — ${name}${company ? ` (${company})` : ""}`,
      text,
    });
    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "Could not send right now. Email us directly at " + site.email },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { error: "Something went wrong. Email me directly at " + site.email },
      { status: 500 }
    );
  }
}
