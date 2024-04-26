import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Uses from "./icons/UsesIcon";
import ArticlesIcon from "./icons/ArticlesIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectsIcon from "./icons/ProjectsIcon";

export const getNavigationLinks = (): {
  label: string | React.JSX.Element;
  href: string;
  icon: () => React.JSX.Element;
}[] => {
  return [
    {
      label: "Projects",
      icon: () => <ProjectsIcon />,
      href: "/projects",
    },
    {
      label: "Articles",
      icon: () => <ArticlesIcon />,
      href: "/articles",
    },
    {
      label: "Uses",
      icon: () => <Uses />,
      href: "/uses",
    },
    {
      label: "Contact",
      icon: () => <ContactIcon />,
      href: "/contact",
    },
  ];
};

interface LinksProps {
  className?: string;
  closeMenu?: Function;
}

const Links: FC<LinksProps> = ({ className, closeMenu }) => {
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
            {icon()}
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
