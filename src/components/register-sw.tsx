"use client";

import { useEffect } from "react";

/** Registers the offline service worker once the page has settled. */
export function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
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
