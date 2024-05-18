"use server";

import {
  PostsByPublicationDocument,
  PostsByPublicationQuery,
} from "../schema/graphql";

async function getPosts(
  after?: string
): Promise<PostsByPublicationQuery["publication"]> {
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
    data: { publication: posts },
  }: { data: PostsByPublicationQuery } = await response.json();

  return posts;
}

export default getPosts;
