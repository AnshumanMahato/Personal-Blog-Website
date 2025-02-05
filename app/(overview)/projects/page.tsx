import getPinnedRepos from "@/app/actions/getPinnedRepos";
import CardContainer from "@/app/components/CardContainer";
import PageBanner from "@/app/components/PageBanner";
import PageCTA from "@/app/components/PageCTA";
import PageHeading from "@/app/components/PageHeading";
import ProjectCard from "@/app/components/ProjectCard";
import Section from "@/app/components/Section";
import { addProjectJsonLd } from "@/app/utils/seo/addProjectsJsonLd";
import profile from "@/app/lib/profile.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: "Check out some of the projects I have worked on.",
};

export const revalidate = 86400;

const { github, frontendmentor } = profile.handles.portfolios;

async function Projects() {
  const socials = [
    {
      href: frontendmentor,
      icon: <SiFrontendmentor />,
      handle: `/${frontendmentor.split("/").pop()}`,
    },
    {
      href: github,
      icon: <FaGithub />,
      handle: `/${github.split("/").pop()}`,
    },
  ];

  const projects = await getPinnedRepos();
  if (!projects) notFound();

  const projectCards = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <>
      <PageBanner
        title="Projects"
        coverImage="/assets/images/projectscover.jpg"
        coverImageAlt="next"
      />
      <Section>
        <PageHeading>Project Portfolio.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            I am passionate about building efficient, scalable applications and
            continuously improving my craft. Here, you&apos;ll find a showcase
            of my work, including web development projects, open-source
            contributions, and other creative endeavours.
          </p>
        </div>
      </Section>
      <PageCTA links={socials} />
      <CardContainer>{projectCards}</CardContainer>
      <script
        id="projects-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addProjectJsonLd()),
        }}
      />
    </>
  );
}

export default Projects;
