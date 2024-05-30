import { PageInfo, PostFragment } from "../schema/graphql";

type PostsInfo = {
  posts: PostFragment[];
  pageInfo: PageInfo | undefined;
};

export default PostsInfo;
