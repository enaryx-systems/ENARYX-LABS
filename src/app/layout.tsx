import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ModalProvider } from "@/components/modal";
import { RegisterServiceWorker } from "@/components/register-sw";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "technology and innovation company",
    "software product development",
    "AI solutions",
    "business automation",
    "digital platforms",
    "technology consulting",
    "MVP development",
    "custom software",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

// Dark is the site's only theme — this just flips the no-js CSS fallback off.
const noJsScript = `document.documentElement.classList.remove('no-js');`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`no-js ${manrope.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noJsScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-text antialiased">
        <div className="bg-grid" aria-hidden />
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
        <SmoothScroll>
          <ModalProvider>
            <RegisterServiceWorker />
            <Cursor />
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </ModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
