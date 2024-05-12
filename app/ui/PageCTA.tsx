import SocialLink from "./SocialLink";

function PageCTA({
  links,
}: {
  links: { href: string; icon: React.ReactNode; handle: string }[];
}) {
  return (
    <section className="md:sticky top-32 md:row-start-2 md:col-start-2 flex flex-col items-start gap-[1.5rem] md:w-min h-min md:[justify-self:end] md:mt-[2.5rem]">
      {links.map(({ href, icon, handle }) => (
        <SocialLink key={handle} href={href} icon={icon}>
          {handle}
        </SocialLink>
      ))}
    </section>
  );
}

export default PageCTA;
