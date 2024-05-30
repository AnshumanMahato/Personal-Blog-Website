import { notFound } from "next/navigation";
import PageBanner from "@/app/ui/PageBanner";
import BlogCardContainer from "@/app/ui/BlogCardContainer";
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
      <PageBanner title="Blogs" coverImage="/next.svg" coverImageAlt="next" />
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
