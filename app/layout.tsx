import type { Metadata } from "next";
import request from "graphql-request";
import Footer from "@/app/ui/Footer";
import { inter } from "@/app/ui/fonts";
import Header from "@/app/ui/Header";
import "./globals.css";
import {
  PublicationByHostDocument,
  PublicationByHostQuery,
} from "./schema/graphql";

const getMetadata = async (): Promise<Metadata> => {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;

  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: PublicationByHostDocument,
      variables: {
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: PublicationByHostQuery } = await response.json();

  //TODO: Replace with actual data from publication
  return {
    title: "Anshuman Mahato",
    description: "Web Developer | Blogger | Open Source Enthusiast",
    twitter: {
      card: "summary_large_image",
      site: "@AnshumanMahato_",
      title: "Anshuman Mahato",
      description: "Web Developer | Blogger | Open Source Enthusiast",
    },
  };
};

export const metadata: Promise<Metadata> = (async () => await getMetadata())();

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {
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
