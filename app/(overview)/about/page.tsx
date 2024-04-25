import PageHeading from "@/app/ui/PageHeading";

function About() {
  return (
    <>
      <section className="col-span-full flex flex-col gap-[2rem]">
        <PageHeading>About Me</PageHeading>
        <div className=" w-full h-[17.5rem] xs:h-[22.5rem] bg-secondary-light rounded-[1rem] sm:rounded-[2rem]"></div>
      </section>
    </>
  );
}

export default About;
