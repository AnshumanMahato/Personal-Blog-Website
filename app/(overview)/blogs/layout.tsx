import getPublication from "@/app/actions/getPublication";
import profile from "@/app/lib/profile.json";
import { Metadata } from "next";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const revalidate = 86400;

async function generatePublicationMetadata(): Promise<Metadata> {
  const publication = await getPublication();

  if (!publication) return {};

  return {
    title: `Blogs | ${profile.name}`,
    description:
      publication.descriptionSEO ||
      publication.title ||
      `${profile.name}'s Blog`,
    twitter: {
      card: "summary_large_image",
      title:
        publication.displayTitle ||
        publication.title ||
        `${profile.name}'s Blog`,
      description:
        publication.descriptionSEO ||
        publication.title ||
        `${publication.author.name}'s Blog`,
      site: profile.handles.socials.twitter,
      images: [publication.ogMetaData?.image || ""],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      title: `Blogs | ${profile.name}`,
      description:
        publication.descriptionSEO ||
        publication.title ||
        `${publication.author.name}'s Blog`,
      images: [
        {
          url: publication.ogMetaData?.image || "",
          width: 1200,
          height: 630,
          alt: publication.displayTitle || publication.title || "",
        },
      ],
    },
  };
}

export const metadata: Promise<Metadata> = generatePublicationMetadata();

async function BlogsLayout({ children }: Props) {
  return <>{children}</>;
}

export default BlogsLayout;
