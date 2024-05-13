import SocialLink from "./SocialLink";

function PageCTA({
  links,
}: {
  links: { href: string; icon: React.ReactNode; handle: string }[];
}) {
  return (
    <section className="md:row-start-2 md:col-start-2 flex flex-col md:items-end md:mt-[2.5rem]">
      <div className="md:sticky top-32 flex flex-col gap-[1.5rem]">
        {links.map(({ href, icon, handle }) => (
          <SocialLink key={handle} href={href} icon={icon}>
            {handle}
          </SocialLink>
        ))}
      </div>
    </section>
  );
}

export default PageCTA;
