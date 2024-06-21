"use server";

import { RssFeedDocument, RssFeedQuery } from "@/app/schema/hashnode.graphql";
import PostsFeedInfo from "../@types/PostsFeedInfo";

async function getPostsFeedData(
  after?: string | null
): Promise<PostsFeedInfo | null> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: RssFeedDocument,
      variables: {
        first: 20,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        after,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: RssFeedQuery } = await response.json();

  if (!publication) return null;
  const {
    posts: { edges: postEdges },
    ...publicationData
  } = publication;
  const posts = (postEdges ?? []).map((edge) => edge.node);

  return {
    publication: publicationData,
    posts,
    pageInfo: publication.posts.pageInfo,
  };
}

export default getPostsFeedData;
