import { Post, PostBase } from "@/@types/ContentStore";
import fs from "fs";
import path from "path";

const post_base: PostBase = {
  slug: "understanding-javascript-execution",
  title: "Understanding JavaScript Execution with some Pizza",
  subtitle: null,
  publishedAt: "2025-03-02",
  updatedAt: "2025-03-02",
  tags: ["javascript", "fundamentals", "basics-of-javascript"],
  series: null,
  draft: false,
  featured: true,
  canonicalUrl:
    "https://anshumanmahato.me/blogs/understanding-javascript-execution",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1740918855243/a81779db-b0e6-4856-b3d6-80ecfc0cfad0.jpeg",
  seo: {
    title: "Understanding JavaScript Execution with some Pizza",
    description: "Understanding JavaScript Execution with some Pizza",
  },
  author: {
    name: "Anshuman Mahato",
    username: "anshumanmahato",
  },
};

const post: Post = {
  ...post_base,
  excerpt: "Understanding JavaScript Execution with some Pizza",
  content: fs.readFileSync(
    path.join(__dirname, `${post_base.slug}.md`),
    "utf-8",
  ),
  coverImage: "/images/blog/understanding-javascript-execution/cover.jpg",
};
