"use server";

import {
  PageInfo,
  PostFragment,
  SeriesPostsByPublicationDocument,
  SeriesPostsByPublicationQuery,
} from "@/app/schema/graphql";

type PostsInfo = {
  posts: PostFragment[];
  pageInfo: PageInfo | undefined;
};

async function getPosts(
  series: string,
  after?: string
): Promise<PostsInfo | null> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: SeriesPostsByPublicationDocument,
      variables: {
        first: 10,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        series,
        after,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: SeriesPostsByPublicationQuery } = await response.json();

  if (!publication) return null;
  const posts = (publication.series?.posts.edges ?? []).map(
    (edge) => edge.node
  );

  return {
    posts,
    pageInfo: publication.series?.posts.pageInfo,
  };
}

export default getPosts;
