import { ParamsProps } from "@/app/@types/Props";
import getFullRepository from "@/app/actions/getFullRepository";
import { MarkdownToHtml } from "@/app/components/MarkdownToHTML";
import { notFound } from "next/navigation";

async function ProjectDetails({ params: { slug } }: ParamsProps) {
  const repo = await getFullRepository(decodeURIComponent(slug));
  if (!repo) notFound();
  notFound();
  //Page work in progress will be adjusted in future
  console.log(repo);
  return (
    <div>
      <MarkdownToHtml contentMarkdown={repo.readme!} />
    </div>
  );
}

export default ProjectDetails;
