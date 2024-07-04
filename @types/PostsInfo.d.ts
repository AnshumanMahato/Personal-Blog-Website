import { PageInfo, PostFragment } from "../app/schema/hashnode.graphql";

type PostsInfo = {
  posts: PostFragment[];
  pageInfo: PageInfo | undefined;
  series?: {
    name: string;
    slug: string;
    coverImage?: string | null;
  };
};

export default PostsInfo;
