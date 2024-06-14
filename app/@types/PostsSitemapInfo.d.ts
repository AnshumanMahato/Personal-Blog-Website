import {
  PageInfo,
  SitemapPostFieldsFragment,
} from "../schema/hashnode.graphql";

type PostsSitemapInfo = {
  posts: SitemapPostFieldsFragment[];
  pageInfo: PageInfo | undefined;
};

export default PostsSitemapInfo;
