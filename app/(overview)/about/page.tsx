import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import PageHeading from "@/app/components/PageHeading";
import PageBanner from "@/app/components/PageBanner";
import Section from "@/app/components/Section";
import PageCTA from "@/app/components/PageCTA";
import { Metadata } from "next";
import { addAboutJsonLd } from "@/app/utils/seo/addAboutJsonLd";
import profile from "@/app/lib/profile.json";
import Link from "next/link";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: `About Me | ${profile.name}`,
};

const { twitter, linkedin } = profile.handles.socials;

function About() {
  const socials = [
    {
      href: twitter,
      icon: <FaXTwitter />,
      handle: `@${twitter.split("/").pop()}`,
    },
    {
      href: linkedin,
      icon: <FiLinkedin />,
      handle: `/${linkedin.split("/").pop()}`,
    },
    {
      href: `mailto:${profile.email}`,
      icon: <MdOutlineEmail />,
      handle: profile.email,
    },
  ];

  return (
    <>
      <GoogleAnalytics />
      <PageBanner
        title="About Me"
        coverImage="/assets/images/aboutcover.png"
        coverImageAlt="next"
      />
      <Section>
        <PageHeading>I&apos;m Anshuman.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            Hi 👋 My name is Anshuman Mahato. I am a full-stack web developer
            specializing in the MERN stack. I&apos;m also a passionate blogger
            who loves sharing insights on web development, technology, and my
            personal experiences as a developer. You can read my articles&nbsp;
            <Link
              className=" font-bold dark:hover:text-accent-dark hover:text-accent-light"
              href="/blogs"
            >
              here.
            </Link>
          </p>
          <p>A little bit about myself:</p>
          <ul className="list-disc pl-[2.5rem] flex flex-col gap-[2rem] [&>li]:pl-[8px]">
            <li>
              I am from Jamshedpur, Jharkhand. I am pursuing my Master&apos;s in
              Computer Applications at the National Institute of Technology,
              Jamshedpur, and I&apos;m in my final year.
            </li>
            <li>
              I&apos;m an open-source enthusiast, actively contributing to
              various projects and collaborating with the developer community.
            </li>
            <li>
              I enjoy sketching in my free time, which helps me to relax and
              stay creative.
            </li>
            <li>
              I also enjoy bike rides, a great way to unwind and explore new
              places.
            </li>
            <li>I like reading about psychology and philosophy.</li>
          </ul>

          <p>
            I&apos;m passionate about solving problems through code and
            continuously learning new technologies. I&apos;m excited about the
            future of web development and look forward to connecting with
            like-minded individuals in the tech community.
          </p>
        </div>
      </Section>
      <PageCTA links={socials} />
      <script
        id="about-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addAboutJsonLd()),
        }}
      />
    </>
  );
}

export default About;
