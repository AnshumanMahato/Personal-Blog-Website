type Props = Readonly<{ children: string }>;

function PageHeading({ children }: Props) {
  const highlight = children.split(" ").pop()!;
  const heading = children.replace(highlight, "");
  return (
    <h1 className="w-full text-white font-light text-[4.8rem] xs:text-[6.4rem] sm:text-[9.6rem] leading-[120%]">
      {heading}
      <span className="text-accent-dark">{highlight}</span>
    </h1>
  );
}

export default PageHeading;
