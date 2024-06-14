"use server";

import { SitemapDocument, SitemapQuery } from "@/app/schema/hashnode.graphql";
import PostsSitemapInfo from "../@types/PostsSitemapInfo";

async function getPostsSitemapData(
  after?: string
): Promise<PostsSitemapInfo | null> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: SitemapDocument,
      variables: {
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        first: 20,
        after,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: SitemapQuery } = await response.json();

  if (!publication) return null;
  const posts = (publication.posts.edges ?? []).map((edge) => edge.node);

  return {
    posts,
    pageInfo: publication.posts.pageInfo,
  };
}

export default getPostsSitemapData;
