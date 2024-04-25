export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-w-[800px] px-[2rem] xs:px-[3rem] grid grid-cols-1 sm:grid-cols-2">
      {children}
    </main>
  );
}
