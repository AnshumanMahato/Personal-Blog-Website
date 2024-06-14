import { RepositoryFragment } from "../schema/github.graphql";

interface Project extends RepositoryFragment {
  languages?: (string | undefined)[];
  repositoryTopics?: (string | undefined)[];
  slug: string;
}

export default Project;
