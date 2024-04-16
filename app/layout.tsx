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
  const classes = classNames(inter.className, "antialiased");

  return (
    <html lang="en">
      <body className={classes}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
