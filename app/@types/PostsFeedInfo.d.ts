import {
  FeedPostsFieldsFragment,
  PageInfo,
  PublicationFragment,
} from "../schema/hashnode.graphql";

type PostsFeedInfo = {
  publication: PublicationFragment;
  posts: FeedPostsFieldsFragment[];
  pageInfo: PageInfo | undefined;
};

export default PostsFeedInfo;
