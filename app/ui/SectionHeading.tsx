function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white text-[1.8rem] font-semibold leading-[150%] capitalize">
      {children}
    </h2>
  );
}

export default SectionHeading;