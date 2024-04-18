import type { Metadata } from "next";
import classNames from "classnames";
import Footer from "@/app/ui/Footer";
import { inter } from "@/app/ui/fonts";
import Header from "@/app/ui/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshuman Mahato",
  description: "Web Developer | Blogger | Open Source Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div
          id="root"
          className="flex flex-col justify-between items-center min-h-screen w-full"
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
