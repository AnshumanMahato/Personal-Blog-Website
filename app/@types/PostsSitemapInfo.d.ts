import { PageInfo, SitemapPostFieldsFragment } from "../schema/graphql";

type PostsSitemapInfo = {
  posts: SitemapPostFieldsFragment[];
  pageInfo: PageInfo | undefined;
};

export default PostsSitemapInfo;
