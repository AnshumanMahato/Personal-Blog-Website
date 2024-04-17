import classNames from "classnames";

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const classes = classNames(
    "flex flex-col items-center w-full gap-[2rem]",
    className
  );

  return <section className={classes}>{children}</section>;
}

export default Section;
