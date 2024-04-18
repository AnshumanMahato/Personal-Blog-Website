import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Section from "@/app/ui/Section";
import SectionHeading from "@/app/ui/SectionHeading";
import SectionLink from "@/app/ui/SectionLink";
import skills from "@/app/lib/skills.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-[800px] px-[2rem] text-center gap-[5rem] mt-[3.5rem] mb-[6rem]">
      <Section>
        <div className="w-[10rem] h-[10rem] bg-secondary-light rounded-full"></div>
        <h1 className="text-white text-[1.8rem] font-semibold leading-[150%]">
          Hey! 👋 Myself <span className="text-accent-dark">Anshuman.</span>
          <br />
          It’s nice to meet you!
        </h1>
        <p>
          I am a Computer Science Student who aspires to be a Software
          Developer. Here, I share about myself and stuff I learn through blogs
          and articles.
        </p>
        <SectionLink href="/blogs">My Blogs {"-->"}</SectionLink>
      </Section>
      <Section>
        <SectionHeading>What I Do</SectionHeading>
        <p>
          Being focused on Web Development, my skills involve building beautiful
          websites and robust web applications. Apart from this, I can also
          build Telegram Chatbots and write Web Scrapping scripts.
        </p>
        <p>I usually work with these technologies.</p>
        <div className="flex flex-wrap gap-[1.6rem] justify-center">
          {skills.map((skill) => (
            <Image
              key={skill}
              src={`/assets/skill-icons/${skill}`}
              alt={skill}
              width={22}
              height={22}
            />
          ))}
        </div>
        <p>Here are some of the things that I have worked on till now.</p>
        <SectionLink href="/projects">Checkout my Projects {"-->"}</SectionLink>
      </Section>
      <Section>
        <SectionHeading>Connect With Me</SectionHeading>
        <p>
          Currently, I am open for Web Developer roles. I am open to
          internships, jobs and freelance opportunities. So, if you have
          anything and think I might be appropriate for the task, please reach
          out.
        </p>
        <p>You can find me here.</p>
        <div className="flex gap-[3rem] text-[2rem] text-accent-dark">
          <Link href="https://twitter.com/AnshumanMahato_">
            <FaXTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/anshuman-mahato/">
            <FaLinkedin />
          </Link>
          <Link href="mailto:anshuman.mahato0935@gmail.com">
            <IoMailOutline />
          </Link>
        </div>
      </Section>
    </main>
  );
}
