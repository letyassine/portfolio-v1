import React, { FC } from "react";
import Link from "next/link";
import Club from "./icons/Club";
import Diamond from "./icons/Diamond";
import Heart from "./icons/Heart";
import Spade from "./icons/Spade";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const getNavigationLinks = (): {
  label: string | React.JSX.Element;
  href: string;
  icon: (pathname: string) => React.JSX.Element;
}[] => {
  return [
    {
      label: "Projects",
      icon: (pathname: string) => (
        <Diamond className={pathname == "/projects" ? "text-rose1" : ""} />
      ),
      href: "/projects",
    },
    {
      label: "Articles",
      icon: (pathname: string) => (
        <Club className={pathname == "/articles" ? "text-yellow1" : ""} />
      ),
      href: "/articles",
    },
    {
      label: "Uses",
      icon: (pathname: string) => (
        <Heart className={pathname == "/uses" ? "text-blue1" : ""} />
      ),
      href: "/uses",
    },
    {
      label: "Contact",
      icon: (pathname: string) => (
        <Spade className={pathname == "/contact" ? "text-red1" : ""} />
      ),
      href: "/contact",
    },
  ];
};

interface LinksProps {
  className?: string;
  closeMenu?: Function;
}

const Links: FC<LinksProps> = ({ className, closeMenu }) => {
  const pathname = usePathname();
  const closeHandler = () => {
    if (closeMenu) {
      closeMenu();
    }
    return;
  };
  const navLinks = getNavigationLinks();
  return (
    <ul className={cn("flex flex-col md:flex-row gap-2", className)}>
      {navLinks.map(({ href, label, icon }) => (
        <li key={href} onClick={closeHandler}>
          <Link
            className="text-xl md:text-sm group flex items-center gap-2 py-1 px-1.5 lg:px-2.5"
            href={href}
          >
            {icon(pathname)}
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
