type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function DetailsLayout({ children }: Props) {
  return (
    <main className="w-full max-w-[830px] px-[2rem] xs:px-[3rem] flex flex-col gap-[4rem] mt-[3.5rem] mb-[6rem]">
      {children}
    </main>
  );
}
