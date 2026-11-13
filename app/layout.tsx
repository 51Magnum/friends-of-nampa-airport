import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { BrandMark } from "@/lib/brand-mark";
import { siteConfig } from "@/lib/site-config";
import { MaybePlaceholder } from "@/lib/placeholder";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteOrigin),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
};

const nav = [
  { href: "#announcements", label: "Announcements" },
  { href: "#meetings", label: "Meetings" },
  { href: "#airport-info", label: "Airport info" },
  { href: "#get-involved", label: "Get involved" },
  { href: "#contact", label: "Contact" },
  { href: "#signup", label: "Email sign-up", emphasize: true },
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sky-pale text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-50 border-b-4 border-amber-bright bg-navy text-white shadow-sm">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold tracking-tight"
            >
              <BrandMark className="h-9 w-9 shrink-0" />
              <span>{siteConfig.name}</span>
            </Link>
            <nav
              aria-label="Page sections"
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-sky-soft"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "emphasize" in item && item.emphasize
                      ? "rounded-full bg-amber-bright px-3 py-1 font-medium text-navy hover:bg-amber-soft"
                      : "hover:text-white"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-navy-deep text-sky-soft">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-10 text-sm leading-6">
            <p className="text-sky-soft/95">{siteConfig.footerDisclaimer}</p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-medium text-white underline decoration-sky-bright/70 underline-offset-4 hover:decoration-amber-bright"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <p className="text-sky-soft/80">
              &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
              <MaybePlaceholder value={siteConfig.domain} />
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
