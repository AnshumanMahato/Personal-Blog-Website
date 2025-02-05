import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/app/components/Footer";
import { inter } from "@/app/components/fonts";
import Header from "@/app/components/Header";
import profile from "@/app/lib/profile.json";
import "./globals.css";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LayoutProps from "@/@types/LayoutProps";

export const metadata: Metadata = {
  title: profile.name,
  description: profile.headline,
  twitter: {
    card: "summary_large_image",
    site: profile.handles.socials.twitter,
    title: profile.name,
    description: profile.headline,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} antialiased`}>
        <div
          id="root"
          className="relative flex flex-col justify-between items-center min-h-screen w-full"
        >
          <Header />
          {children}
          <Footer />
          <DarkModeSwitch />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
