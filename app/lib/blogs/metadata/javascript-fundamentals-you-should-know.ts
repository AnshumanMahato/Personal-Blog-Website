import { Post, PostBase } from "@/@types/ContentStore";
import fs from "fs";
import path from "path";

const post_base: PostBase = {
  slug: "javascript-fundamentals-you-should-know",
  title: "JavaScript Fundamentals You Should Know",
  subtitle: null,
  publishedAt: "2025-02-09",
  updatedAt: "2025-02-09",
  tags: ["javascript", "fundamentals", "programming-languages", "beginner"],
  series: null,
  draft: false,
  featured: false,
  canonicalUrl:
    "https://anshumanmahato.me/blogs/javascript-fundamentals-you-should-know",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1739097760373/dcd95b63-1c50-4271-9cbb-702d1b8223d9.png",
  seo: {
    title: "JavaScript Fundamentals You Should Know",
    description: "JavaScript Fundamentals You Should Know",
  },
  author: {
    name: "Anshuman Mahato",
    username: "anshumanmahato",
  },
};

const post: Post = {
  ...post_base,
  excerpt: "JavaScript Fundamentals You Should Know",
  content: fs.readFileSync(
    path.join(__dirname, `${post_base.slug}.md`),
    "utf-8",
  ),
  coverImage: "/images/blog/javascript-fundamentals-you-should-know/cover.jpg",
};
