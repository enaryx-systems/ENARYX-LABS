"use client";

import { useEffect } from "react";

/**
 * Production: registers the offline service worker once the page has settled.
 *
 * Dev / preview: actively tears down any service worker + its caches that a
 * previous production visit registered on this origin. Without this, the SW's
 * cache-first handling of `/_next/` chunks shadows new code and you end up
 * editing files with no visible effect.
 */
export function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => {});
      if ("caches" in window) {
        caches
          .keys()
          .then((keys) => keys.forEach((k) => caches.delete(k)))
          .catch(() => {});
      }
      return;
    }

    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Offline support just won't be available — the site still works.
      });
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
