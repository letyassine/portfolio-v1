"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import Links from "./Links";
import Hamburger from "hamburger-react";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-white/50 shadow shadow-gray-300/20 backdrop-blur-md transition dark:bg-background/50 dark:shadow-xl dark:shadow-black/20 print:hidden">
      <header className="flex justify-between items-center max-w-screen-lg mx-auto py-2 px-3">
        <div className="flex items-center gap-3">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              height={50}
              width={80}
              alt="logo"
              quality={100}
            />
          </Link>
          <nav>
            <Links className="hidden md:flex" />
          </nav>
        </div>
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
          className={`${
            isOpen ? "absolute" : "hidden"
          } md:hidden w-full top-[60px] right-0 bg-white/70 backdrop-blur-xl dark:bg-black/70 py-4 px-2`}
        >
          <Links closeMenu={() => setOpen(false)} />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
