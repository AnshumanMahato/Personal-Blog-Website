"use client";

import { useCallback, useEffect, useState } from "react";
import { FaHashnode, FaDev } from "react-icons/fa6";
import BlogCard from "@/app/ui/BlogCard";
import CardContainer from "@/app/ui/CardContainer";
import PageBanner from "@/app/ui/PageBanner";
import PageCTA from "@/app/ui/PageCTA";
import PageHeading from "@/app/ui/PageHeading";
import Section from "@/app/ui/Section";
import getPosts from "@/app/actions/getPosts";
import { PageInfo, PostFragment } from "@/app/schema/graphql";

function Blogs() {
  const [posts, setPosts] = useState<PostFragment[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNextPage: false,
    endCursor: "",
  });
  const socials = [
    {
      href: "https://dev.to/anshumanmahato",
      icon: <FaDev />,
      handle: "/anshumanmahato",
    },
    {
      href: "https://hashnode.com/@AnshumanMahato",
      icon: <FaHashnode />,
      handle: "@AnshumanMahato",
    },
  ];

  const getNextPage = useCallback(async () => {
    const newPosts = await getPosts(pageInfo.endCursor!);
    setPosts((currPosts) => [...currPosts, ...(newPosts?.posts ?? [])]);
    setPageInfo(newPosts?.pageInfo ?? { hasNextPage: false, endCursor: "" });
  }, [pageInfo.endCursor]);

  useEffect(() => {
    (async () => {
      const posts = await getPosts();
      setPosts(posts?.posts ?? []);
      setPageInfo(posts?.pageInfo ?? { hasNextPage: false, endCursor: "" });
    })();
  }, []);

  return (
    <>
      <PageBanner title="Blogs" coverImage="/next.svg" coverImageAlt="next" />
      <Section>
        <PageHeading>Blogs &amp; Articles.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            These are some awesome projects that I have made. Some for fun, some
            for learning and some to showcase my skillset.
          </p>
        </div>
      </Section>
      <CardContainer
        hasNextPage={pageInfo.hasNextPage}
        getNextPage={getNextPage}
      >
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </CardContainer>
      <PageCTA links={socials} />
    </>
  );
}

export default Blogs;
