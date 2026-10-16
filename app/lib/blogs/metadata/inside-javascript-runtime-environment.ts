import { Post, PostBase } from "@/@types/ContentStore";
import fs from "fs";
import path from "path";

const post_base: PostBase = {
  slug: "inside-javascript-runtime-environment",
  title: "Inside JavaScript Runtime Environment",
  subtitle: null,
  publishedAt: "2025-07-30",
  updatedAt: "2025-07-30",
  tags: ["javascript", "fundamentals", "web-development", "programming-blogs"],
  series: null,
  draft: false,
  featured: false,
  canonicalUrl:
    "https://anshumanmahato.me/blogs/inside-javascript-runtime-environment",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1753872600567/c1572a57-41fc-45f9-a393-0d5be05e1595.png",
  seo: {
    title: "Inside JavaScript Runtime Environment",
    description: "Inside JavaScript Runtime Environment",
  },
  author: {
    name: "Anshuman Mahato",
    username: "anshumanmahato",
  },
};

const post: Post = {
  ...post_base,
  excerpt: "Inside JavaScript Runtime Environment",
  content: fs.readFileSync(
    path.join(__dirname, `${post_base.slug}.md`),
    "utf-8",
  ),
  coverImage: "/images/blog/inside-javascript-runtime-environment/cover.jpg",
};
