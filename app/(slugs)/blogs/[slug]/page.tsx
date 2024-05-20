import getSinglePost from "@/app/actions/getSinglePost";
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
    description: post?.seo?.description || post?.subtitle || post?.brief,
    alternates: {
      canonical: post?.canonicalUrl ?? post?.url,
    },
    twitter: {
      card: "summary_large_image",
      site: "@AnshumanMahato_",
      title: post?.seo?.title ?? post?.title,
      description: post?.seo?.description || post?.subtitle || post?.brief,
    },
  };
}

function BlogPost({ params }: Props) {
  return <div>{params.slug}</div>;
}

export default BlogPost;
