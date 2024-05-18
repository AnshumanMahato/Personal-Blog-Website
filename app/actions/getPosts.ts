"use server";

import {
  PageInfo,
  Post,
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PublicationPostConnection,
} from "../schema/graphql";

type PostsInfo = {
  posts: Post[];
  pageInfo: PageInfo;
};

async function getPosts(after?: string): Promise<PostsInfo | null> {
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
    next: { revalidate: 3600 },
  });

  const {
    data: { publication },
  }: { data: PostsByPublicationQuery } = await response.json();

  if (!publication) return null;
  const posts = (publication.posts.edges ?? []).map(
    (edge) => edge.node
  ) as Post[];

  return {
    posts,
    pageInfo: publication.posts.pageInfo,
  };
}

export default getPosts;
