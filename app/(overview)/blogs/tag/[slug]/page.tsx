import { notFound } from "next/navigation";
import getPublication from "@/app/actions/getPublication";
import Analytics from "@/app/components/Analytics";
import Integrations from "@/app/components/Integrations";
import { addPublicationJsonLd } from "@/app/utils/seo/addPublicationJsonLd";
import PageBanner from "@/app/components/PageBanner";
import BlogCardContainer from "@/app/components/BlogCardContainer";
import getPostsByTag from "@/app/actions/getPostsByTag";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function BlogsByTag(props: Props) {
  const params = await props.params;
  const publication = await getPublication();
  const posts = await getPostsByTag(params.slug);

  if (!posts?.posts.length) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title="Tag"
        coverImage={`/api/og?tag=${params.slug}`}
        coverImageAlt={params.slug}
      />
      <BlogCardContainer
        initialBlogs={posts?.posts ?? []}
        initialPageInfo={
          posts?.pageInfo ?? { hasNextPage: false, endCursor: "" }
        }
        filter={{ tag: params.slug }}
      />
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

export default BlogsByTag;
