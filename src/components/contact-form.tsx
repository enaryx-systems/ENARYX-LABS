"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, budgetOptions, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-[8px] border border-line-strong bg-bg px-3.5 py-2.5 text-sm text-text placeholder:text-muted/70 focus:border-brand focus:outline-none";
const label = "font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted";
const errorText = "text-[0.8125rem] text-brand";

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
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "", website: "" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("sending");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setStatus("sent");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
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
          <select id="budget" className={cn(field, "appearance-none")} defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
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
