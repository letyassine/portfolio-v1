import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <MaxWidthWrapper className="flex items-center justify-between pb-4 text-zinc-500">
      <p>
        All rights reserved © Yassine Haimouch {new Date().getFullYear()}
      </p>
      <div className="hidden md:flex gap-4">
        <Link href="/" className="flex items-center gap-2 dark:hover:text-white hover:text-black duration-300"><ArrowTopRightIcon />follow me</Link>
        <Link href="/" className="flex items-center gap-2 dark:hover:text-white hover:text-black duration-300"><ArrowTopRightIcon />email me</Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
