export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-w-[800px] px-[2rem] xs:px-[3rem] grid grid-cols-1 md:grid-cols-[500px_minmax(min-content,1fr)] gap-y-[4rem]  mt-[3.5rem] mb-[6rem]">
      {children}
    </main>
  );
}
