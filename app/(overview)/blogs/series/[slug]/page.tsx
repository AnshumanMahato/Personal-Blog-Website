import { notFound } from "next/navigation";
import PageBanner from "@/app/components/PageBanner";
import BlogCardContainer from "@/app/components/BlogCardContainer";
import getPostsBySeries from "@/app/actions/getPostsBySeries";

type Props = {
  params: {
    slug: string;
  };
};

async function BlogsBySeries({ params }: Props) {
  const posts = await getPostsBySeries(params.slug);

  if (!posts?.posts.length) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title="Blogs"
        coverImage={
          posts.series?.coverImage || `/api/og?series=${posts.series?.name}`
        }
        coverImageAlt="next"
      />
      <BlogCardContainer
        initialBlogs={posts?.posts ?? []}
        initialPageInfo={
          posts?.pageInfo ?? { hasNextPage: false, endCursor: "" }
        }
        filter={{ series: params.slug }}
      />
    </>
  );
}

export default BlogsBySeries;
