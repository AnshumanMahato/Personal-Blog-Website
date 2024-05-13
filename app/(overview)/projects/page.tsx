import BlogCard from "@/app/ui/BlogCard";
import CardContainer from "@/app/ui/CardContainer";
import PageBanner from "@/app/ui/PageBanner";
import PageCTA from "@/app/ui/PageCTA";
import PageHeading from "@/app/ui/PageHeading";
import Section from "@/app/ui/Section";
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
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </CardContainer>
      <PageCTA links={socials} />
    </>
  );
}

export default Projects;
