"use server";

import {
  PublicationByHostDocument,
  PublicationByHostQuery,
} from "../schema/hashnode.graphql";

async function getPublication(): Promise<
  PublicationByHostQuery["publication"]
> {
  const GQL_ENDPOINT: string = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: PublicationByHostDocument,
      variables: {
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { publication },
  }: { data: PublicationByHostQuery } = await response.json();
  return publication;
}

export default getPublication;
