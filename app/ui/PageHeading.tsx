function PageHeading({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <h2 className="uppercase leading-[150%] text-[1.2rem] tracking-[5.4px] xs:text-[1.6rem] xs:tracking-[7.2px] pl-[5px] xs:pl-[1rem]">
      {children}
    </h2>
  );
}

export default PageHeading;
