import { Post, PostBase } from "@/@types/ContentStore";
import fs from "fs";
import path from "path";

const post_base: PostBase = {
  slug: "for-intricate-state-handling-try-out-the-usereducer-hook",
  title: "For intricate state handling, try out the useReducer() Hook",
  subtitle: null,
  publishedAt: "2024-07-04",
  updatedAt: "2024-07-04",
  tags: ["react", "react-hooks", "javascript", "frontend"],
  series: null,
  draft: false,
  featured: false,
  canonicalUrl:
    "https://anshumanmahato.me/blogs/for-intricate-state-handling-try-out-the-usereducer-hook",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1720089836914/9511222a-d4bc-4efd-a44a-609d598c2f45.png",
  seo: {
    title: "For intricate state handling, try out the useReducer() Hook",
    description: "For intricate state handling, try out the useReducer() Hook",
  },
  author: {
    name: "Anshuman Mahato",
    username: "anshumanmahato",
  },
};

const post: Post = {
  ...post_base,
  excerpt: "For intricate state handling, try out the useReducer() Hook",
  content: fs.readFileSync(
    path.join(__dirname, `${post_base.slug}.md`),
    "utf-8",
  ),
  coverImage:
    "/images/blog/for-intricate-state-handling-try-out-the-usereducer-hook/cover.jpg",
};
