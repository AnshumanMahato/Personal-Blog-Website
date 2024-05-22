"use client";

import { useEffect, useState } from "react";
import { PostFullFragment } from "@/app/schema/graphql";
import { MarkdownToHtml } from "@/app/ui/MarkdownToHTML";
import { useEmbeds } from "@/app/utils/renderer/hooks/useEmbeds";
import handleMathJax from "@/app/utils/handle-math-jax";
import { loadIframeResizer } from "../utils/renderer/services/embed";
import { triggerCustomWidgetEmbed } from "@/app/utils/trigger-custom-widget-embed";

type Props = {
  post: PostFullFragment;
};

function Article({ post }: Props) {
  //Monokai theme for code snippets
  const highlightJsMonokaiTheme =
    ".hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  const [canLoadEmbeds, setCanLoadEmbeds] = useState(false);
  useEmbeds({ enabled: canLoadEmbeds });

  if (post.hasLatexInPost) {
    setTimeout(() => {
      handleMathJax(true);
    }, 500);
  }

  useEffect(() => {
    if (!post) {
      return;
    }

    (async () => {
      await loadIframeResizer();
      triggerCustomWidgetEmbed(post.publication?.id.toString());
      setCanLoadEmbeds(true);
    })();
  }, [post]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}
      ></style>
      <div>
        <h1 className="text-4xl leading-tight tracking-tight text-black dark:text-white">
          {post.title}
        </h1>
        {/* <div className="text-neutral-600 dark:text-neutral-400">
        {Intl.DateTimeFormat().format(new Date(post.publishedAt))}
      </div> */}
        <MarkdownToHtml contentMarkdown={post.content.markdown} />
      </div>
    </>
  );
}

export default Article;
