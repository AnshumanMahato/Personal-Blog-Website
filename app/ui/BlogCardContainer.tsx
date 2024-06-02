"use client";

import { useCallback, useState } from "react";
import { PageInfo, PostFragment } from "@/app/schema/graphql";
import BlogCard from "@/app/ui/BlogCard";
import CardContainer from "@/app/ui/CardContainer";
import PostsInfo from "../@types/PostsInfo";
import getPostsByTag from "../actions/getPostsByTag";
import getPostsBySeries from "../actions/getPostsBySeries";
import getAllPosts from "../actions/getAllPosts";

type Props = {
  initialBlogs: PostFragment[];
  initialPageInfo: PageInfo;
  filter?:
    | {
        tag: string;
        series?: never;
      }
    | {
        tag?: never;
        series: string;
      };
};

function BlogCardContainer({ initialBlogs, initialPageInfo, filter }: Props) {
  const [posts, setPosts] = useState<PostFragment[]>(initialBlogs);
  const [pageInfo, setPageInfo] = useState<PageInfo>(initialPageInfo);

  const getNextPage = useCallback(async () => {
    let newPosts: PostsInfo | null;

    if (filter?.tag) {
      newPosts = await getPostsByTag(filter.tag, pageInfo.endCursor!);
    } else if (filter?.series) {
      newPosts = await getPostsBySeries(filter.series, pageInfo.endCursor!);
    } else {
      newPosts = await getAllPosts(pageInfo.endCursor!);
    }

    setPosts((currPosts) => [...currPosts, ...(newPosts?.posts ?? [])]);
    setPageInfo(newPosts?.pageInfo ?? { hasNextPage: false, endCursor: "" });
  }, [filter, pageInfo.endCursor]);

  return (
    <CardContainer hasNextPage={pageInfo.hasNextPage} getNextPage={getNextPage}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </CardContainer>
  );
}

export default BlogCardContainer;
