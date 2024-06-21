import { RepositoryDetailsFragment } from "../schema/github.graphql";

interface Repodata extends RepositoryDetailsFragment {
  languages?: (string | undefined)[];
  repositoryTopics?: (string | undefined)[];
  readme?: string | null;
}
