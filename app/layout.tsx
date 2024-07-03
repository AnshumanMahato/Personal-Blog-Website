import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import { inter } from "@/app/components/fonts";
import Header from "@/app/components/Header";
import profile from "@/app/lib/profile.json";
import "./globals.css";
import DarkModeSwitch from "./components/DarkModeSwitch";

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

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
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
      </body>
    </html>
  );
}
