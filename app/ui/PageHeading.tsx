function PageHeading({ children }: { children: string }) {
  const highlight = children.split(" ").pop()!;
  const heading = children.replace(highlight, "");
  return (
    <h1 className="text-white font-light text-[4.8rem] leading-[120%]">
      {heading}
      <span className="text-accent-dark">{highlight}</span>
    </h1>
  );
}

export default PageHeading;
