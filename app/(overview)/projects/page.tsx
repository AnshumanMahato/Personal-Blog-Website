import CardContainer from "@/app/components/CardContainer";
import PageBanner from "@/app/components/PageBanner";
import PageCTA from "@/app/components/PageCTA";
import PageHeading from "@/app/components/PageHeading";
import ProjectCard from "@/app/components/ProjectCard";
import Section from "@/app/components/Section";
import { FaGithub } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

function Projects() {
  const socials = [
    {
      href: "https://www.frontendmentor.io/profile/AnshumanMahato",
      icon: <SiFrontendmentor />,
      handle: "/AnshumanMahato",
    },
    {
      href: "https://github.com/AnshumanMahato",
      icon: <FaGithub />,
      handle: "/AnshumanMahato",
    },
  ];

  return (
    <>
      <PageBanner
        title="Projects"
        coverImage="/next.svg"
        coverImageAlt="next"
      />
      <Section>
        <PageHeading>Project Portfolio.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            These are some awesome projects that I have made. Some for fun, some
            for learning and some to showcase my skillset.
          </p>
        </div>
      </Section>
      <CardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CardContainer>
      <PageCTA links={socials} />
    </>
  );
}

export default Projects;
