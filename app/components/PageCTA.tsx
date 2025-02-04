import SocialLink from "./SocialLink";

type Props = Readonly<{
  links: { href: string; icon: React.ReactNode; handle: string }[];
}>;

function PageCTA({ links }: Props) {
  return (
    <section className="md:row-start-2 md:col-start-2 flex flex-col md:items-end md:mt-[2.5rem]">
      <div className="md:sticky top-32 flex flex-col gap-[1.5rem]">
        {links.map(({ href, icon, handle }, index) => (
          <SocialLink key={index} href={href} icon={icon}>
            {handle}
          </SocialLink>
        ))}
      </div>
    </section>
  );
}

export default PageCTA;
