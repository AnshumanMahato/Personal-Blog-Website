import { Post, PostBase } from "@/@types/ContentStore";
import fs from "fs";
import path from "path";

const post_base: PostBase = {
  slug: "mastering-react-context-simplifying-state-management-and-prop-drilling",
  title:
    "Mastering React Context: Simplifying State Management and Prop Drilling",
  subtitle: null,
  publishedAt: "2024-07-04",
  updatedAt: "2024-07-04",
  tags: ["react", "react-hooks", "javascript", "frontend"],
  series: null,
  draft: false,
  featured: false,
  canonicalUrl:
    "https://anshumanmahato.me/blogs/mastering-react-context-simplifying-state-management-and-prop-drilling",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1720090837922/926bd14d-9eaf-4aa1-a1fc-28244f68ae9e.jpeg",
  seo: {
    title:
      "Mastering React Context: Simplifying State Management and Prop Drilling",
    description:
      "Mastering React Context: Simplifying State Management and Prop Drilling",
  },
  author: {
    name: "Anshuman Mahato",
    username: "anshumanmahato",
  },
};

const post: Post = {
  ...post_base,
  excerpt:
    "Mastering React Context: Simplifying State Management and Prop Drilling",
  content: fs.readFileSync(
    path.join(__dirname, `${post_base.slug}.md`),
    "utf-8",
  ),
  coverImage:
    "/images/blog/mastering-react-context-simplifying-state-management-and-prop-drilling/cover.jpg",
};
