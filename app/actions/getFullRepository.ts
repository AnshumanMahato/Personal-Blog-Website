"use server";

import { Repodata } from "../@types/RepoData";
import {
  Blob,
  RepositoryByIdDocument,
  RepositoryByIdQuery,
  RepositoryDetailsFragment,
} from "../schema/github.graphql";

async function getFullRepository(id: string): Promise<Repodata | null> {
  const GH_ENDPOINT: string = process.env.GITHUB_API_ENDPOINT!;
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  const response = await fetch(GH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: RepositoryByIdDocument,
      variables: { id },
    }),
    cache: "force-cache",
  });

  const {
    data: { node },
  }: { data: RepositoryByIdQuery } = await response.json();

  const repo = node as RepositoryDetailsFragment;

  if (!repo) return null;

  const languages = repo.languages?.nodes?.map((node) => node?.name);
  const repositoryTopics = repo.repositoryTopics?.nodes?.map(
    (node) => node?.topic.name
  );

  let readme: string | null = null;

  if (repo.upCase) {
    const obj = repo.upCase as Blob;
    if (obj.text) {
      readme = obj.text;
    }
  }
  if (repo.object) {
    const obj = repo.object as Blob;
    if (obj.text) {
      readme = obj.text;
    }
  }

  const fullRepo: Repodata = {
    ...repo,
    languages,
    repositoryTopics,
    readme,
  };

  return fullRepo;
}

export default getFullRepository;
