import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sdicapua.dev"),
  title: {
    default: "Stephen DiCapua — CRE Professional & AI Agent Builder",
    template: "%s — Stephen DiCapua",
  },
  description:
    "Commercial real estate professional and AI agent builder working at the intersection of property markets and autonomous software.",
  openGraph: {
    title: "Stephen DiCapua",
    description:
      "Commercial Real Estate Professional & AI Agent Builder",
    url: "https://sdicapua.dev",
    siteName: "sdicapua.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} dark`}>
      <body className="font-sans bg-background text-[#d6d3cd] min-h-screen flex flex-col">
        <div className="site-atmosphere" aria-hidden />
        <div className="site-content flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
