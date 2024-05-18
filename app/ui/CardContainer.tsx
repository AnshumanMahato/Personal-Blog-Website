import Section from "./Section";

function CardContainer({
  children,
  hasNextPage,
  getNextPage,
}: {
  children: React.ReactNode;
  hasNextPage: boolean | null | undefined;
  getNextPage: () => void;
}) {
  return (
    <Section className="!gap-[1rem] xs:!gap-[2rem] sm:!gap-[3rem] col-span-full">
      {children}
      {hasNextPage && (
        <button
          className="px-[1rem] py-[5px] bg-accent-dark text-background-dark font-medium text-[1.4rem] xs:text-[1.8rem] leading-[150%]"
          onClick={getNextPage}
        >
          More
        </button>
      )}
    </Section>
  );
}

export default CardContainer;
