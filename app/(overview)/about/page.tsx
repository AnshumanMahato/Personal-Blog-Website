import PageHeading from "@/app/ui/PageHeading";
import PageSubheading from "@/app/ui/PageSubheading";

function About() {
  return (
    <>
      <section className="col-span-full flex flex-col gap-[2rem]">
        <PageSubheading>About Me</PageSubheading>
        <div className=" w-full h-[17.5rem] xs:h-[22.5rem] bg-secondary-light rounded-[1rem] sm:rounded-[2rem]"></div>
      </section>
      <section>
        <PageHeading>I&apos;m Anshuman.</PageHeading>
      </section>
    </>
  );
}

export default About;
