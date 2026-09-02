"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { ContactForm } from "./contact-form";
import { site } from "@/lib/site";

type ModalApi = { open: () => void; close: () => void; isOpen: boolean };
const ModalCtx = createContext<ModalApi | null>(null);

export function useContactModal(): ModalApi {
  const ctx = useContext(ModalCtx);
  if (!ctx) throw new Error("useContactModal must be used within <ModalProvider>");
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) {
      lastFocused.current?.focus?.();
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Lenis hijacks wheel/touch scroll on the root, so `overflow: hidden` alone
    // won't stop the page behind the modal from moving — pause it explicitly.
    lenis?.stop();
    const t = setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("input,textarea,button")
        ?.focus();
    }, 60);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
      clearTimeout(t);
    };
  }, [isOpen, close, lenis]);

  return (
    <ModalCtx.Provider value={{ open, close, isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="fixed inset-0 bg-ink/45 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_40px_100px_-30px_rgba(30,20,60,0.5)]"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
              transition={
                reduced
                  ? { duration: 0.15 }
                  : { type: "spring", stiffness: 280, damping: 26 }
              }
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand/20 blur-3xl"
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-4 border-b border-line/70 px-6 py-5">
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-brand">
                    Let&apos;s Build Something Meaningful
                  </p>
                  <h2
                    id="contact-modal-title"
                    className="mt-1.5 font-display text-2xl leading-tight"
                  >
                    Tell us about your idea
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-brand hover:text-text"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="thin-scroll relative max-h-[70vh] overflow-y-auto px-6 py-6">
                <ContactForm compact onSuccess={close} />
                <p className="mt-4 text-center font-mono text-[0.72rem] text-muted">
                  or email{" "}
                  <a href={`mailto:${site.email}`} className="text-brand hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalCtx.Provider>
  );
}
