import { ParamsProps } from "@/@types/Props";
import getFullRepository from "@/app/actions/getFullRepository";
import { MarkdownToHtml } from "@/app/components/MarkdownToHTML";
import { notFound } from "next/navigation";

async function ProjectDetails(props: ParamsProps) {
  const params = await props.params;

  const {
    slug
  } = params;

  const repo = await getFullRepository(decodeURIComponent(slug));
  if (!repo) notFound();
  notFound();
  //Page work in progress will be adjusted in future
  console.log(repo);
  return <div>{<MarkdownToHtml contentMarkdown={repo?.readme!} />}</div>;
}

export default ProjectDetails;
