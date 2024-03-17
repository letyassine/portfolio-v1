"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import Links from "./Links";
import Hamburger from "hamburger-react";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-white/80 shadow shadow-gray-300/20 backdrop-blur-md transition dark:bg-dark/80 dark:shadow-xl dark:shadow-black/20 print:hidden">
      <MaxWidthWrapper className="py-2">
        <header className="flex justify-between items-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/images/www/vec.svg"
              height={30}
              width={30}
              alt="logo"
              quality={100}
            />
          </Link>
          <nav>
            <Links className="hidden md:flex" />
          </nav>
          {/* <div className="flex items-center gap-3">
          </div> */}
          <div className="flex items-center gap-2">
            <Link
              className="hidden md:block"
              href="https://github.com/yassinehaimouch/blog-portfolio"
              target="_blank"
            >
              <BsGithub size="18px" />
            </Link>
            <ThemeSwitch />
            {/* This is for Mobile Navbar */}
            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          {/* This is for Mobile Navbar */}
          <div
            className={cn(
              "md:hidden w-full top-[60px] right-0 border-b border-white/5 bg-white/80 shadow shadow-gray-300/20 backdrop-blur-xl transition dark:bg-dark/80 dark:shadow-xl dark:shadow-black/20 print:hidden py-4 px-2",
              isOpen ? "absolute" : "hidden"
            )}
          >
            <Links closeMenu={() => setOpen(false)} />
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
