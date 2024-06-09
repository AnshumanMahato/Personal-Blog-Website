import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import { inter } from "@/app/components/fonts";
import Header from "@/app/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: process.env.AUTHOR,
  description: "Web Developer | Blogger | Open Source Enthusiast",
  twitter: {
    card: "summary_large_image",
    site: "@AnshumanMahato_",
    title: "Anshuman Mahato",
    description: "Web Developer | Blogger | Open Source Enthusiast",
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
