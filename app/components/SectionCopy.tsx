type Props = Readonly<{ children: React.ReactNode }>;

function SectionCopy({ children }: Props) {
  return <p className="text-[1.2rem] leading-[150%]">{children}</p>;
}

export default SectionCopy;
