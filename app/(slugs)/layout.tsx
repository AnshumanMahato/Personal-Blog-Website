export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-w-[830px] px-[2rem] xs:px-[3rem] bg-primary-light">
      {children}
    </main>
  );
}
