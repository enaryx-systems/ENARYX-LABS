"use client";

import { useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string };

const SUGGESTED = [
  "What does Enaryx Labs actually build?",
  "Can you add AI to my existing app?",
  "I only have an idea — can you still help?",
];

/**
 * Deliberately light-themed, even though the rest of the site is dark —
 * reads as a real embedded product surface rather than another dark panel.
 * Colors here are hardcoded (not the page's CSS tokens, which are dark-only).
 */
export function ServicesDemo() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setBusy(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMessages((m) => [
        ...m,
        { role: "assistant", text: data.reply ?? data.error ?? "Something went wrong." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Couldn’t reach the server. Try again in a moment." },
      ]);
    } finally {
      setBusy(false);
      requestAnimationFrame(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
      });
    }
  }

  return (
    <div className="demo-panel overflow-hidden rounded-2xl border border-[#e5e1ee] bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
      <div className="flex items-center gap-2 border-b border-[#e0d6f2] bg-[linear-gradient(120deg,#efe7fb,#eef4fb)] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[#5b2c87]" />
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[#5b2c87]">
          Ask what we do
        </span>
      </div>

      <div
        ref={listRef}
        data-lenis-prevent
        className="max-h-[320px] min-h-[180px] overflow-y-auto overscroll-contain px-4 py-4"
      >
        {messages.length === 0 ? (
          <p className="text-sm text-[#6b6579]">
            A small assistant, grounded only in what&apos;s on this page. It&apos;s the
            same kind of thing we&apos;d build into your product — try a question.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
              <div key={i} className="text-sm">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[#9c97ac]">
                  {m.role === "user" ? "You" : "Enaryx"}
                </span>
                <p className={m.role === "user" ? "mt-1 text-[#1b1424]" : "mt-1 text-[#4b4558]"}>
                  {m.text}
                </p>
              </div>
            ))}
            {busy && <p className="font-mono text-[0.75rem] text-[#6b6579]">thinking…</p>}
          </div>
        )}
      </div>

      <div className="border-t border-[#efecf5] p-3">
        {messages.length === 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {SUGGESTED.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                className="rounded-[10px] border border-[#e5e1ee] px-2.5 py-1.5 text-left font-mono text-[0.72rem] text-[#6b6579] transition-colors hover:border-[#5b2c87] hover:text-[#1b1424]"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question…"
            className="w-full rounded-[10px] border border-[#e5e1ee] bg-white px-3 py-2 text-sm text-[#1b1424] placeholder:text-[#9c97ac] focus:border-[#5b2c87] focus:outline-none"
          />
          <button
            type="submit"
            disabled={busy}
            className="shrink-0 rounded-[10px] border border-[#5b2c87] bg-[#5b2c87] px-4 py-2 font-mono text-[0.75rem] text-white transition-colors hover:bg-[#3a1a5c] disabled:opacity-60"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}
