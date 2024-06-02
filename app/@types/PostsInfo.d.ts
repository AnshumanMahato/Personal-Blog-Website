import { PageInfo, PostFragment } from "../schema/graphql";

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
