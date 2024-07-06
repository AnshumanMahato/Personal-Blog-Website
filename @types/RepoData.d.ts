import { RepositoryDetailsFragment } from "../app/schema/github.graphql";

interface Repodata extends RepositoryDetailsFragment {
  languages?: (string | undefined)[];
  repositoryTopics?: (string | undefined)[];
  readme?: string | null;
}
