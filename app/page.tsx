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
            I am a Computer Science Student who aspires to be a Software
            Developer. I write blogs and articles about web dev, computer
            science and my experiences in general.
          </p>
          <SectionLink href="/blogs">My Blogs {"-->"}</SectionLink>
        </Section>
        <Section>
          <SectionHeading>What I Do</SectionHeading>
          <p>
            Being focused on Web Development, my skills involve building
            beautiful websites and robust web applications. Apart from this, I
            can also build Telegram Chatbots and write Web Scrapping scripts.
          </p>
          <p>I usually work with these technologies.</p>
          <div className="flex flex-wrap gap-[1.6rem] xs:gap-[2.5rem] sm:gap-[3.5rem] justify-center">
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
          </div>
          <p>Here are some of the things that I have worked on till now.</p>
          <SectionLink href="/projects">
            Checkout my Projects {"-->"}
          </SectionLink>
        </Section>
        <Section>
          <SectionHeading>Connect With Me</SectionHeading>
          <p>
            Looking for a web developer? I am open to internships, jobs,
            freelance projects and open-source collaboration. Reach out if you
            have anything and think I might be appropriate. I would love to hear
            from you.
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
