import Section from "./Section";

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <Section className="!gap-[1rem] xs:!gap-[2rem] sm:!gap-[3rem] col-span-full">
      {children}
      <button className="px-[1rem] py-[5px] bg-accent-dark text-background-dark font-medium text-[1.4rem] xs:text-[1.8rem] leading-[150%]">
        More
      </button>
    </Section>
  );
}

export default CardContainer;
