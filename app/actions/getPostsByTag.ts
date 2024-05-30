"use server";

import {
  PageInfo,
  PostFragment,
  TagPostsByPublicationDocument,
  TagPostsByPublicationQuery,
} from "@/app/schema/graphql";
import PostsInfo from "../@types/PostInfo";

async function getPostsByTag(
  tagSlug: string,
  after?: string
): Promise<PostsInfo | null> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: TagPostsByPublicationDocument,
      variables: {
        first: 10,
        tagSlug,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        after,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: TagPostsByPublicationQuery } = await response.json();

  if (!publication) return null;
  const posts = (publication.posts.edges ?? []).map((edge) => edge.node);

  return {
    posts,
    pageInfo: publication.posts.pageInfo,
  };
}

export default getPostsByTag;
