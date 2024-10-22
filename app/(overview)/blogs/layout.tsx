import getPublication from "@/app/actions/getPublication";
import Analytics from "@/app/components/Analytics";
import Integrations from "@/app/components/Integrations";
import { addPublicationJsonLd } from "@/app/utils/seo/addPublicationJsonLd";
import profile from "@/app/lib/profile.json";
import { Metadata } from "next";

type Props = Readonly<{
  children: React.ReactNode;
}>;

async function generatePublicationMetadata(): Promise<Metadata> {
  const publication = await getPublication();

  if (!publication) return {};

  return {
    title: publication.title || `Blogs | ${profile.name}`,
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
          <Integrations
            publication={{
              integrations: publication.integrations,
              url: publication.url,
            }}
          />
          <Analytics publication={{ id: publication.id }} />
        </>
      )}
    </>
  );
}

export default BlogsLayout;
