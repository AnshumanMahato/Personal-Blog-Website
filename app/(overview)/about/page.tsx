import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import PageHeading from "@/app/ui/PageHeading";
import SocialLink from "@/app/ui/SocialLink";
import PageBanner from "@/app/ui/PageBanner";

function About() {
  return (
    <>
      <PageBanner
        title="About Me"
        coverImage="/next.svg"
        coverImageAlt="next"
      />
      <section className="flex flex-col gap-[4rem]">
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
      </section>
      <section className="md:sticky top-32 md:row-start-2 md:col-start-2 flex flex-col items-start gap-[1.5rem] w-min h-min md:[justify-self:end] md:mt-[2.5rem]">
        <SocialLink
          href="https://github.com/AnshumanMahato"
          icon={<FiGithub />}
        >
          /Anshuman Mahato
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/anshuman-mahato/"
          icon={<FiLinkedin />}
        >
          /anshuman-mahato
        </SocialLink>
        <SocialLink
          href="https://twitter.com/AnshumanMahato_"
          icon={<FaXTwitter />}
        >
          @AnshumanMahato_
        </SocialLink>
      </section>
    </>
  );
}

export default About;
