import getPublication from "@/app/actions/getPublication";
import Analytics from "@/app/components/Analytics";
import { addPublicationJsonLd } from "@/app/utils/seo/addPublicationJsonLd";
import { Metadata } from "next";

type Props = Readonly<{
  children: React.ReactNode;
}>;

async function generatePublicationMetadata(): Promise<Metadata> {
  const publication = await getPublication();

  if (!publication) return {};

  return {
    title: publication.title || `Blogs | ${process.env.AUTHOR}`,
    description:
      publication.descriptionSEO ||
      publication.title ||
      `${publication.author.name}'s Blog`,
    twitter: {
      card: "summary_large_image",
      title:
        publication.displayTitle ||
        publication.title ||
        `${process.env.AUTHOR}'s Blog`,
      description:
        publication.descriptionSEO ||
        publication.title ||
        `${publication.author.name}'s Blog`,
      site: process.env.AUTHOR_TWITTER,
      images: [publication.ogMetaData?.image || ""],
    },
  };
}

export const metadata: Promise<Metadata> = generatePublicationMetadata();

async function BlogsLayout({ children }: Props) {
  const publication = await getPublication();
  return (
    <>
      {children}
      {publication && (
        <>
          <script
            id="publication-json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(addPublicationJsonLd(publication)),
            }}
          />
          <Analytics publication={{ id: publication.id }} />
        </>
      )}
    </>
  );
}

export default BlogsLayout;
