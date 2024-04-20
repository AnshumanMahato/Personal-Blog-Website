import classNames from "classnames";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

function SectionLink({
  href,
  children,
}: {
  href: Url;
  children: React.ReactNode;
}) {
  const classes: string = classNames(
    "text-accent-dark text-[1.2rem] xs:text-[1.6rem] font-medium",
    "relative px-[8px] py-[2px] overflow-hidden",
    "before:absolute before:top-0 before:-left-full before:w-full before:h-full before:block before:bg-accent-dark before:z-0",
    "hover:text-background-dark hover:before:left-0 before:transition-all before:duration-200"
  );

  return (
    <Link className={classes} href={href}>
      <span className="relative z-1">{children}</span>
    </Link>
  );
}

export default SectionLink;
