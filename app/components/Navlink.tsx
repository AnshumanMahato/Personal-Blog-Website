import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type Props = Readonly<{
  href: Url;
  children: React.ReactNode;
}>;

function NavLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
    >
      <span>{children}</span>
    </Link>
  );
}

export default NavLink;
