import { RepositoryFragment } from "../app/schema/github.graphql";

interface Project extends RepositoryFragment {
  languages?: (string | undefined)[];
  repositoryTopics?: (string | undefined)[];
}

export default Project;
