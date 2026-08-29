import { NextResponse } from "next/server";
import type AnthropicSDK from "@anthropic-ai/sdk";
import { services, faqs, productsAndSolutions } from "@/lib/content";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * "Ask what we do" assistant.
 *
 * With ANTHROPIC_API_KEY set, this answers with Claude, grounded in the
 * content below. Without a key it falls back to a deterministic match so the
 * demo always works. See README for the upgrade steps.
 */

const SYSTEM = `You are the assistant on the website of ${site.name}, a technology and innovation company. ${site.description}
Answer questions about the company concisely (2-4 sentences), in first person plural ("we"), never "I".
Ground every answer in the WHAT WE DO / IDEAS WE CAN BUILD / FAQ data below. If asked something outside it, say so and point to ${site.email}.

WHAT WE DO:
${services.map((s) => `- ${s.title}: ${s.summary}`).join("\n")}

IDEAS WE CAN BUILD: ${productsAndSolutions.join(", ")}.

FAQ:
${faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}`;

function fallback(message: string): string {
  const q = message.toLowerCase();

  const faqHit = faqs.find((f) => {
    const words = f.q.toLowerCase().replace(/[?]/g, "").split(" ").filter((w) => w.length > 3);
    return words.some((w) => q.includes(w));
  });
  if (faqHit) return faqHit.a;

  const serviceHit = services.find((s) =>
    [s.title, s.slug].some((t) => q.includes(t.toLowerCase().split(" ")[0]))
  );
  if (serviceHit) return serviceHit.summary;

  if (q.includes("idea") || q.includes("build") || q.includes("build something")) {
    return `We can help with things like ${productsAndSolutions
      .slice(0, 4)
      .join(", ")
      .toLowerCase()}, and more. Tell us more about what you're thinking at ${site.email}.`;
  }

  return `We focus on ${services
    .map((s) => s.title.toLowerCase())
    .join(", ")}. Ask about any of them, or email ${site.email}.`;
}

export async function POST(request: Request) {
  let message = "";
  try {
    const body = (await request.json()) as { message?: unknown };
    message = typeof body.message === "string" ? body.message.slice(0, 500) : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!message.trim()) {
    return NextResponse.json({ error: "Ask a question first." }, { status: 422 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: fallback(message), grounded: false });
  }

  try {
    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey });
    const res = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 1024,
      // Short FAQ answers — keep it fast and cheap. Bump effort if you want
      // richer replies, or swap the model id (e.g. "claude-haiku-4-5").
      output_config: { effort: "low" },
      system: SYSTEM,
      messages: [{ role: "user", content: message }],
    });
    const reply = res.content
      .filter((b): b is AnthropicSDK.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    return NextResponse.json({ reply: reply || fallback(message), grounded: true });
  } catch (err) {
    console.error("[demo] anthropic error", err);
    return NextResponse.json({ reply: fallback(message), grounded: false });
  }
}
