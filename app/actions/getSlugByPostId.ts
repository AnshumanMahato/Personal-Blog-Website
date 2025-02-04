"use server";

import {
  SlugByPostIdDocument,
  SlugByPostIdQuery,
} from "../schema/hashnode.graphql";

async function getSlugByPostId(postId: string) {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: SlugByPostIdDocument,
      variables: {
        id: postId,
      },
    }),
  });

  const {
    data: { post },
  }: { data: SlugByPostIdQuery } = await response.json();

  if (!post) return null;
  return post.slug;
}

export default getSlugByPostId;
