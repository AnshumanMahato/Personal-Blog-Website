import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import SectionLink from "@/app/components/SectionLink";
import skills from "@/app/lib/skills.json";
import Image from "next/image";
import Link from "next/link";
import { addHomeJsonLd } from "./utils/seo/addHomeJsonLd";
import profile from "@/app/lib/profile.json";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex flex-col items-center w-full max-w-[830px] px-[2rem] xs:px-[3rem] text-center gap-[10rem] mt-[3.5rem] mb-[6rem]">
        <Section>
          <div className="relative w-[10rem] h-[10rem] xs:w-[15rem] xs:h-[15rem] sm:w-[20rem] sm:h-[20rem] bg-secondary-light dark:bg-secondary-dark rounded-full overflow-hidden">
            <Image
              src="/assets/images/profile.jpg"
              alt={profile.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <h1 className="text-black dark:text-white text-[1.8rem] xs:text-[2.4rem] font-semibold leading-[150%]">
            Hey! 👋 Myself{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Anshuman.
            </span>
            <br />
            It’s nice to meet you!
          </h1>
          <p>
            I’m a data scientist who enjoys turning ideas into things -
            sometimes code, sometimes words, sometimes visuals. Welcome to my
            space where I share my experiences, document what I learn, and
            showcase what I create.
          </p>
          <SectionLink href="/about">More About Me {"-->"}</SectionLink>
        </Section>
        <Section>
          <SectionHeading>My Journal</SectionHeading>
          <div className="relative w-[28rem] h-[28rem]">
            <Image
              src="/assets/images/home-blog.svg"
              alt="My Journal"
              fill
              className="dark:hidden"
            />
            <Image
              src="/assets/images/home-blog-dark.svg"
              alt="My Journal"
              fill
              className="hidden dark:block"
            />
          </div>
          <p>
            A space where I think out loud. I write about what I’m learning and
            what I’m thinking about, sometimes technical, sometimes not. If
            something stays with me, I write it down.
          </p>
          {/* <div className="flex flex-wrap gap-[1.6rem] xs:gap-[2.5rem] sm:gap-[3.5rem] justify-center">
            {skills.map((skill) => {
              const [skillName, skillIcon] = skill;
              return (
                <div
                  key={skillName}
                  className="relative w-[22px] h-[22px] xs:w-[27px] xs:h-[27px] sm:w-[36px] sm:h-[36px]"
                >
                  <Image
                    src={`/assets/skill-icons/${skillIcon}`}
                    alt={skillName}
                    sizes="22px, (min-width: 375px) 27px, (min-width: 640px) 36px"
                    fill
                  />
                </div>
              );
            })}
          </div> */}
          <SectionLink href="/blogs">Checkout my Journal {"-->"}</SectionLink>
        </Section>
        <Section>
          <SectionHeading>My Sketchbook</SectionHeading>
          <div className="relative w-[28rem] h-[28rem]">
            <Image
              src="/assets/images/home-art.svg"
              alt="My Sketchbook"
              fill
              className="dark:hidden"
            />
            <Image
              src="/assets/images/home-art-dark.svg"
              alt="My Sketchbook"
              fill
              className="hidden dark:block"
            />
          </div>
          <p>
            I like to draw well. It is how I slow down, pay attention, and stay
            present for a bit. Some pieces take shape, some don’t. A small
            collection of things I have drawn so far.
          </p>
          <SectionLink href="/sketchbook">
            Checkout my Sketchbook{"-->"}
          </SectionLink>
        </Section>
        <Section>
          <SectionHeading>Connect With Me</SectionHeading>
          <p>
            If something here caught your interest, or you would like to share
            an idea, or just talk — feel free to reach out. I’m always open to
            seeing where a good conversation can lead.
          </p>
          <p>You can find me here.</p>
          <div className="flex gap-[3rem] text-[2rem] xs:text-[2.5rem] text-accent-light dark:text-accent-dark">
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
      <script
        id="home-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addHomeJsonLd()),
        }}
      />
    </>
  );
}
