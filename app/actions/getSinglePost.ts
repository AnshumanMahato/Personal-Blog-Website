"use server";

import {
  PostFullFragment,
  PublicationFragment,
  SinglePostByPublicationDocument,
  SinglePostByPublicationQuery,
} from "@/app/schema/graphql";

type PostInfo = {
  post: PostFullFragment | null | undefined;
  publication: PublicationFragment;
  comments: number;
};

async function getSinglePost(slug: string): Promise<PostInfo | null> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: SinglePostByPublicationDocument,
      variables: {
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        slug,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: SinglePostByPublicationQuery } = await response.json();

  if (!publication || !publication.post) return null;

  return {
    post: publication.post,
    publication,
    comments: publication.post.comments.totalDocuments,
  };
}

export default getSinglePost;
