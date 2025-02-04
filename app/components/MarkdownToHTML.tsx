/* This component has been pulled from Hashnode Blog Starterkit. */
"use client";

import { markdownToHtml } from "../utils/renderer/markdownToHtml";
import { useEmbeds } from "../utils/renderer/hooks/useEmbeds";
import { memo } from "react";

type Props = {
  contentMarkdown: string;
};

const MarkdownToHtmlBase = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });

  return (
    <article
      className="hashnode-content-style mx-auto w-full md:max-w-(--breakpoint-md)"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export const MarkdownToHtml = memo(MarkdownToHtmlBase);
