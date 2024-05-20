import getSinglePost from "@/app/actions/getSinglePost";
import { addArticleJsonLd } from "@/app/utils/seo/addArticleJsonLd";
import { ResolvingMetadata } from "next";

type Props = Readonly<{
  params: {
    slug: string;
  };
}>;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const data = await getSinglePost(params.slug);
  if (!data) return;
  const { post, publication } = data;

  return {
    title: post?.seo?.title ?? post?.title,
    description: post?.seo?.description ?? post?.subtitle ?? post?.brief,
    alternates: {
      canonical: post?.canonicalUrl ?? post?.url,
    },
    twitter: {
      card: "summary_large_image",
      site: "@AnshumanMahato_",
      title: post?.seo?.title ?? post?.title,
      description: post?.seo?.description ?? post?.subtitle ?? post?.brief,
      images: [post?.ogMetaData?.image, post?.coverImage?.url],
    },
    openGraph: {
      type: "article",
      url: post?.canonicalUrl ?? post?.url,
      title: post?.seo?.title ?? post?.title,
      description: post?.seo?.description ?? post?.subtitle ?? post?.brief,
      site_name: publication?.title,
      images: [post?.ogMetaData?.image, post?.coverImage?.url],
    },
  };
}

async function BlogPost({ params }: Props) {
  const data = await getSinglePost(params.slug);
  if (!data) return <></>;
  const { post, publication } = data;

  return (
    <>
      <div>{params.slug}</div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addArticleJsonLd(publication, post)),
        }}
      />
    </>
  );
}

export default BlogPost;
