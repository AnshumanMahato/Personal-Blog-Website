"use server";

import {
  PostsByPublicationDocument,
  PostsByPublicationQuery,
} from "@/app/schema/hashnode.graphql";
import PostsInfo from "../../@types/PostsInfo";

async function getAllPosts(after?: string): Promise<PostsInfo | null> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: PostsByPublicationDocument,
      variables: {
        first: 10,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        after,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: PostsByPublicationQuery } = await response.json();

  if (!publication) return null;
  const posts = (publication.posts.edges ?? []).map((edge) => edge.node);

  return {
    posts,
    pageInfo: publication.posts.pageInfo,
  };
}

export default getAllPosts;
