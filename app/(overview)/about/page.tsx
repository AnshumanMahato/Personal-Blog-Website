import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import PageHeading from "@/app/ui/PageHeading";
import PageSubheading from "@/app/ui/PageSubheading";
import SocialLink from "@/app/ui/SocialLink";

function About() {
  return (
    <>
      <section className="col-span-full flex flex-col gap-[2rem]">
        <PageSubheading>About Me</PageSubheading>
        <div className=" w-full h-[17.5rem] xs:h-[22.5rem] bg-secondary-light rounded-[1rem] sm:rounded-[2rem]"></div>
      </section>
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
      <section className="flex flex-col items-start gap-[1.5rem] w-min">
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
