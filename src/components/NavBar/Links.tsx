import React, { FC } from "react";
import Link from "next/link";
import Club from "./icons/Club";
import Diamond from "./icons/Diamond";
import Heart from "./icons/Heart";
import Spade from "./icons/Spade";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
  return (
    <ul className={cn("flex flex-col md:flex-row gap-2", className)}>
      <li onClick={closeHandler}>
        <Link
          className="text-xl md:text-sm group flex items-center gap-2 py-1 px-1.5 lg:px-2.5"
          href="/projects"
        >
          <Diamond className={pathname == "/projects" ? "text-rose1" : ""} />
          Projects
        </Link>
      </li>
      <li onClick={closeHandler}>
        <Link
          className="text-xl md:text-sm group flex items-center gap-2 py-1 px-1.5 lg:px-2.5"
          href="/articles"
        >
          <Club className={pathname == "/articles" ? "text-yellow1" : ""} />
          Articles
        </Link>
      </li>
      <li onClick={closeHandler}>
        <Link
          className="text-xl md:text-sm group flex items-center gap-2 py-1 px-1.5 lg:px-2.5"
          href="/uses"
        >
          <Heart className={pathname == "/uses" ? "text-blue1" : ""} />
          Uses
        </Link>
      </li>
      <li onClick={closeHandler}>
        <Link
          className="text-xl md:text-sm group flex items-center gap-2 py-1 px-1.5 lg:px-2.5"
          href="/contact"
        >
          <Spade className={pathname == "/contact" ? "text-red1" : ""} />
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Links;
