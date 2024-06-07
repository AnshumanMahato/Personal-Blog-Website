import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import PageHeading from "@/app/ui/PageHeading";
import PageBanner from "@/app/ui/PageBanner";
import Section from "@/app/ui/Section";
import PageCTA from "@/app/ui/PageCTA";
import { Metadata } from "next";
import { addAboutJsonLd } from "@/app/utils/seo/addAboutJsonLd";

export const metadata: Metadata = {
  title: `About Me | ${process.env.AUTHOR}`,
};

function About() {
  const socials = [
    {
      href: "https://twitter.com/AnshumanMahato_",
      icon: <FaXTwitter />,
      handle: "@AnshumanMahato_",
    },
    {
      href: "https://www.linkedin.com/in/anshuman-mahato/",
      icon: <FiLinkedin />,
      handle: "/anshuman-mahato",
    },
    {
      href: "mailto:anshuman.mahato0935@gmail.com",
      icon: <MdOutlineEmail />,
      handle: "hi@anshumanmahato.me",
    },
  ];

  return (
    <>
      <PageBanner
        title="About Me"
        coverImage="/next.svg"
        coverImageAlt="next"
      />
      <Section>
        <PageHeading>I&apos;m Anshuman.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            I am a full-stack developer with a passion for building web
            applications. I have experience in building web applications using
            React, Node.js, and MongoDB. I am currently working as a full-stack
            developer at a startup in Bangalore, India.
          </p>
          <p>
            I have a bachelor&apos;s degree in Computer Science from the Indian
            Institute of Technology, Roorkee. I have been working as a software
            developer for the past 3 years and have experience in building
            scalable web applications.
          </p>
          <p>
            I am passionate about building web applications that are user
            friendly and easy to use. I believe that the best web applications
            are the ones that are simple and intuitive to use. I am always
            looking for new challenges and opportunities to learn and grow as a
            developer.
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
