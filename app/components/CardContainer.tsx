import Section from "./Section";

type Props = Readonly<{
  children: React.ReactNode;
  hasNextPage?: boolean | null;
  getNextPage?: () => void;
}>;

function CardContainer({ children, hasNextPage, getNextPage }: Props) {
  return (
    <Section className="!gap-[1rem] xs:!gap-[2rem] sm:!gap-[3rem] col-span-full">
      {children}
      {hasNextPage && (
        <button
          className="px-[1rem] py-[5px] bg-accent-light dark:bg-accent-dark text-background-light dark:text-background-dark font-medium text-[1.4rem] xs:text-[1.8rem] leading-[150%]"
          onClick={getNextPage}
        >
          More
        </button>
      )}
    </Section>
  );
}

export default CardContainer;
