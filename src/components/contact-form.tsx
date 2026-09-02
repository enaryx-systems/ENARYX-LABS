"use client";

import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { contactSchema, budgetOptions, type ContactInput } from "@/lib/contact-schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// EmailJS — all config comes from NEXT_PUBLIC_* env vars (safe to expose:
// the public key only works from our allow-listed domain).
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
  autoReplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
};

// Every enquiry lands here.
const ENQUIRIES_TO = site.email; // enaryxlab@gmail.com

// White fields on any background — crisp, readable, premium.
const field =
  "w-full rounded-[10px] border border-[#d9d3e8] bg-white px-3.5 py-2.5 text-sm text-[#14101f] shadow-[0_1px_2px_rgba(20,14,40,0.04)] placeholder:text-[#8a8397] focus:border-[#5b21b6] focus:outline-none focus:ring-2 focus:ring-[#5b21b6]/15";
const label = "font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted";
const errorText = "text-[0.8125rem] text-brand";

// Custom dropdown — no native <select>, so it looks the same in every browser
// and matches the white field styling exactly.
function BudgetSelect({
  value,
  onChange,
  onBlur,
  invalid,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id="budget"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onBlur={() => {
          // let a click on an option register before validating
          window.setTimeout(() => {
            if (!rootRef.current?.contains(document.activeElement)) onBlur();
          }, 0);
        }}
        className={cn(
          field,
          "flex items-center justify-between pr-10 text-left",
          !value && "text-[#8a8397]",
          invalid && "border-[#5b21b6] ring-2 ring-[#5b21b6]/15",
        )}
      >
        {value || "Select a range"}
        <svg
          viewBox="0 0 16 16"
          className={cn(
            "pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8397] transition-transform",
            open && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1.5 max-h-60 w-full overflow-y-auto rounded-[10px] border border-[#d9d3e8] bg-white py-1 shadow-[0_12px_32px_-8px_rgba(20,14,40,0.24)]"
        >
          {budgetOptions.map((b) => (
            <li key={b}>
              <button
                type="button"
                role="option"
                aria-selected={value === b}
                onClick={() => {
                  onChange(b);
                  setOpen(false);
                  onBlur();
                }}
                className={cn(
                  "block w-full px-3.5 py-2 text-left text-sm text-[#14101f] hover:bg-[#f3f0fa]",
                  value === b && "bg-[#f3f0fa] font-medium",
                )}
              >
                {b}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ContactForm({
  compact = false,
  onSuccess,
}: {
  compact?: boolean;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "", website: "" },
  });

  async function onSubmit(values: ContactInput) {
    // Honeypot tripped — silently drop, show success.
    if (values.website) {
      setStatus("sent");
      reset();
      return;
    }

    if (
      !EMAILJS.serviceId ||
      !EMAILJS.publicKey ||
      !EMAILJS.contactTemplateId
    ) {
      setStatus("error");
      setServerError(
        `Email isn't configured yet. Please write to us directly at ${ENQUIRIES_TO}.`,
      );
      return;
    }

    setStatus("sending");
    setServerError(null);

    const company = values.company?.trim() || "—";
    const params = {
      name: values.name,
      email: values.email,
      company,
      budget: values.budget,
      message: values.message,
      to_email: ENQUIRIES_TO,
      reply_to: values.email,
      subject: `New enquiry — ${values.name}${company !== "—" ? ` · ${company}` : ""}`,
      time: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    try {
      // 1 — notify the team
      await emailjs.send(EMAILJS.serviceId, EMAILJS.contactTemplateId, params, {
        publicKey: EMAILJS.publicKey,
      });

      // 2 — auto-reply to the sender (best-effort: a bounce here shouldn't
      // make the visitor think their message failed)
      if (EMAILJS.autoReplyTemplateId) {
        try {
          await emailjs.send(
            EMAILJS.serviceId,
            EMAILJS.autoReplyTemplateId,
            params,
            { publicKey: EMAILJS.publicKey },
          );
        } catch (e) {
          console.warn("[contact] auto-reply failed", e);
        }
      }

      setStatus("sent");
      reset();
    } catch (err) {
      // EmailJS rejects with { status, text } — surface that so a
      // misconfigured template ("recipients address is empty", etc.) is
      // obvious instead of a generic failure.
      const detail =
        err && typeof err === "object" && "text" in err
          ? String((err as { text: unknown }).text)
          : err instanceof Error
            ? err.message
            : "";
      console.error("[contact] emailjs error", err);
      setStatus("error");
      setServerError(
        `Couldn't send${detail ? ` (${detail})` : ""}. Please email us directly at ${ENQUIRIES_TO}.`,
      );
    }
  }

  // Validation failed — the offending field (e.g. an empty Name that's
  // scrolled out of view in the modal) gets focused + scrolled into view,
  // plus a visible summary so the button never feels dead.
  function onInvalid() {
    setStatus("error");
    setServerError("Please fill in the highlighted fields above.");
    const first = document.querySelector<HTMLElement>(
      'form [aria-invalid="true"], form .text-brand',
    );
    first?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8">
        <p className="font-display text-2xl">Thanks — that&apos;s in.</p>
        <p className="mt-3 text-muted">
          We read every inquiry and reply within two working days, usually
          sooner. If it&apos;s urgent, email us directly.
        </p>
        {onSuccess && (
          <button
            type="button"
            onClick={onSuccess}
            className="mt-5 inline-flex items-center gap-2 rounded-[8px] border border-line-strong px-4 py-2 font-mono text-[0.8125rem] text-muted transition-colors hover:border-brand hover:text-text"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="flex flex-col gap-5" noValidate>
      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input id="name" className={field} {...register("name")} />
          {errors.name && <p className={errorText}>{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" type="email" className={field} {...register("email")} />
          {errors.email && <p className={errorText}>{errors.email.message}</p>}
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className={label}>
            Company <span className="lowercase tracking-normal">(optional)</span>
          </label>
          <input id="company" className={field} {...register("company")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className={label}>
            Budget range
          </label>
          <Controller
            control={control}
            name="budget"
            render={({ field: f }) => (
              <BudgetSelect
                value={f.value ?? ""}
                onChange={f.onChange}
                onBlur={f.onBlur}
                invalid={!!errors.budget}
              />
            )}
          />
          {errors.budget && <p className={errorText}>{errors.budget.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={label}>
          Tell us about your idea or requirement
        </label>
        <textarea id="message" rows={6} className={cn(field, "resize-y")} {...register("message")} />
        {errors.message && <p className={errorText}>{errors.message.message}</p>}
      </div>

      {serverError && <p className={errorText}>{serverError}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-brand bg-brand px-5 py-3 font-mono text-[0.8125rem] tracking-[0.02em] text-on-brand transition-colors hover:bg-brand-strong disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
