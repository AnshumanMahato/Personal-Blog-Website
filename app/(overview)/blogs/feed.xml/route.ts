import getPostsFeedData from "@/app/actions/getPostsFeedData";
import { constructRSSFeedFromPosts } from "@/app/utils/feed";
import { notFound } from "next/navigation";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const after = searchParams.get("after");

  const data = await getPostsFeedData(after);
  if (!data) notFound();

  const { publication, posts, pageInfo } = data;
  const feed = constructRSSFeedFromPosts(
    publication,
    posts,
    after,
    pageInfo && pageInfo.hasNextPage ? pageInfo.endCursor : null
  );

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  });
}
