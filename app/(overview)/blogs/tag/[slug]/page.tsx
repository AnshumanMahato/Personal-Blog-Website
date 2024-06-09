import { notFound } from "next/navigation";
import PageBanner from "@/app/components/PageBanner";
import BlogCardContainer from "@/app/components/BlogCardContainer";
import getPostsByTag from "@/app/actions/getPostsByTag";

type Props = {
  params: {
    slug: string;
  };
};

async function BlogsByTag({ params }: Props) {
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
    </>
  );
}

export default BlogsByTag;
