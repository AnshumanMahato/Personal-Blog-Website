import classNames from "classnames";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

function Section({ children, className }: Props) {
  const classes = classNames(
    "flex flex-col items-center w-full gap-[2rem] xs:gap-[4rem]",
    className
  );

  return <section className={classes}>{children}</section>;
}

export default Section;
