import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Placeholder } from "@/lib/placeholder";
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
  { href: "#signup", label: "Email sign-up" },
  { href: "#contact", label: "Contact" },
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
      <body className="flex min-h-full flex-col bg-zinc-50 text-black dark:bg-black dark:text-zinc-50">
        <header className="border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <nav
              aria-label="Page sections"
              className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-black dark:hover:text-zinc-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400">
            <p>{siteConfig.footerDisclaimer}</p>
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. Domain:{" "}
              <Placeholder value={siteConfig.domain} />
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
