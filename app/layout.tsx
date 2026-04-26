import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HoopSpark — Get Better From Your Game Film",
  description:
    "Upload a clip. Get clear feedback in seconds. Built for basketball players 12–18.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0B0B0F] text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0B0B0F]/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="text-lg font-bold">
              Hoop<span className="text-[#FF6B2C]">Spark</span>
            </Link>
            <a
              href="https://app.hoopspark.ai"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-[#FF6B2C] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#FF7E47]"
            >
              Try It Free
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-10 border-t border-zinc-900 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 sm:px-6 md:flex-row md:justify-between">
            <p className="text-sm text-zinc-500">© 2026 HoopSpark</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
