import {
  PageInfo,
  SitemapPostFieldsFragment,
} from "../app/schema/hashnode.graphql";

type PostsSitemapInfo = {
  posts: SitemapPostFieldsFragment[];
  pageInfo: PageInfo | undefined;
};

export default PostsSitemapInfo;
