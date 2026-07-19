import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans bg-background text-zinc-200 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
