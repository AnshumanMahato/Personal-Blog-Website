import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import Project from "../@types/Project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-[64rem] flex items-center gap-[1rem] sm:gap-[2rem] p-[8px] xs:p-[1rem] sm:p-[2rem] sm:pr-[7rem] border-b-[1px] border-b-secondary-light dark:border-b-secondary-dark">
      {/* <div className="h-full  bg-secondary-light dark:bg-secondary-dark"></div> */}
      <div className="flex flex-col gap-[5px] sm:gap-[2rem] text-secondary-light dark:text-secondary-dark">
        <h3 className="text-black dark:text-white text-[1.6rem] xs:text-[2rem] leading-[150%]">
          {project.nameWithOwner}
        </h3>
        <p className="text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] leading-[150%]">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="text-accent-light dark:text-accent-dark text-[1.2rem] xs:text-[1.6rem] font-medium"
        >
          Read More {"-->"}
        </Link>
      </div>
      {/* <div className="flex flex-col gap-[1rem] text-[1.5rem] text-primary-light dark:text-primary-dark ">
        <Link
          className="flex gap-[1rem] items-center hover:text-accent-light dark:hover:text-accent-dark"
          href="#"
        >
          <FaGithub />
          <span className="hidden sm:inline">Repository</span>
        </Link>
        <Link
          className="flex gap-[1rem] items-center hover:text-accent-light dark:hover:text-accent-dark"
          href="#"
        >
          <FaGlobe />
          <span className="hidden sm:inline">Live Site</span>
        </Link>
      </div> */}
    </div>
  );
}

export default ProjectCard;
