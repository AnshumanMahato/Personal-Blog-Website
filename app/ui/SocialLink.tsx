import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

function SocialLink({
  href,
  icon,
  children,
}: {
  href: Url;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex gap-[8px] items-center text-secondary-dark hover:text-accent-dark transition-colors duration-300"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

export default SocialLink;
