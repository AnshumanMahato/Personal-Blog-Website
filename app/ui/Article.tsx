"use client";

import { PostFullFragment } from "../schema/graphql";
import { MarkdownToHtml } from "./MarkdownToHTML";

type Props = {
  post: PostFullFragment;
};

function Article({ post }: Props) {
  return (
    <div>
      <h1 className="text-4xl leading-tight tracking-tight text-black dark:text-white">
        {post.title}
      </h1>
      <div className="text-neutral-600 dark:text-neutral-400">
        {post.publishedAt}
      </div>
      <MarkdownToHtml contentMarkdown={post.content.markdown} />
    </div>
  );
}

export default Article;
