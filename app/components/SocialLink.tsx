import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type Props = Readonly<{
  href: Url;
  icon: React.ReactNode;
  children: React.ReactNode;
}>;

function SocialLink({ href, icon, children }: Props) {
  return (
    <Link
      href={href}
      className="flex gap-[8px] items-center text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
      target="_blank"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

export default SocialLink;
