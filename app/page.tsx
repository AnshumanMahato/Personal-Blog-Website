import SectionLink from "@/app/ui/SectionLink";
import Section from "./ui/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full max-w-[800px] px-[2rem] text-center gap-[4rem]">
      <Section>
        <div className="w-[10rem] h-[10rem] bg-secondary-light rounded-full"></div>
        <h1 className="test-white text-[1.8rem] font-semibold leading-[150%]">
          Hey! 👋 Myself <span className="text-accent-dark">Anshuman.</span>
          <br />
          It’s nice to meet you!
        </h1>
        <p className="text-[1.2rem] leading-[150%]">
          I am a Computer Science Student who aspires to be a Software
          Developer. Here, I share about myself and stuff I learn through blogs
          and articles.
        </p>
        <SectionLink href="/blogs">My Blogs {"-->"}</SectionLink>
      </Section>
    </main>
  );
}
