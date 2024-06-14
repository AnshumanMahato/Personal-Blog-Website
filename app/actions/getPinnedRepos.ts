"use server";

import Project from "../@types/Project";
import {
  PinnedReposByUserDocument,
  PinnedReposByUserQuery,
  RepositoryFragment,
} from "../schema/github.graphql";

async function getPinnedRepos(after?: string): Promise<Project[] | null> {
  const GH_ENDPOINT: string = process.env.GITHUB_API_ENDPOINT!;
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  const response = await fetch(GH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: PinnedReposByUserDocument,
      variables: {
        login: "AnshumanMahato",
      },
    }),
    cache: "force-cache",
  });

  const {
    data: { user },
  }: { data: PinnedReposByUserQuery } = await response.json();

  if (!user) return null;

  const pinnedItems = (user.pinnedItems.nodes ?? []).map(
    (node) => node as RepositoryFragment
  );

  const projects = pinnedItems.map((item) => {
    const languages = item.languages?.nodes?.map((node) => node?.name);
    const repositoryTopics = item.repositoryTopics?.nodes?.map(
      (node) => node?.topic.name
    );

    return {
      ...item,
      nameWithOwner: item.nameWithOwner.split("/").join(" / "),
      languages,
      repositoryTopics,
      slug: item.name.toLowerCase(),
    };
  });

  return projects;
}

export default getPinnedRepos;
