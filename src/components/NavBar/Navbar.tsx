"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">YH</Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/uses">Uses</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  );
};

export default Navbar;
