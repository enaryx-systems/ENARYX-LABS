// Enaryx Labs — minimal offline support.
// Network-first for pages (so content stays fresh while online), falling
// back to whatever was last cached — or the offline page — when there's no
// connection. Static assets are cached as they're requested.

const VERSION = "enaryx-v3";
const OFFLINE_URL = "/offline";

const APP_SHELL = [
  "/",
  "/services",
  "/process",
  "/work",
  "/rnd",
  "/about",
  "/careers",
  "/contact",
  OFFLINE_URL,
  "/manifest.json",
  "/icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin GET requests — everything else (API calls,
  // cross-origin fonts/scripts, POSTs) goes straight to the network.
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // Next build output is content-hashed — always go to the network so a new
  // deploy is never shadowed by a stale chunk; fall back to cache offline.
  if (url.pathname.startsWith("/_next/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Pages: network-first, cache as a fallback, offline page as a last resort.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL)))
    );
    return;
  }

  // Everything else (JS/CSS/fonts/images): cache-first, refresh in the background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
