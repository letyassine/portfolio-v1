import React, { FC } from "react";
import { Metadata } from "next";
import BlurImage from "@/components/BlurImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Yassine Haimouch",
  description: "Frontend developer, Content creator, and Public speaker",
};

const Contact: FC = () => {
  return (
    <MaxWidthWrapper className="md:h-[calc(100vh-48px-40px)] mt-20 md:mt-0 flex items-center">
      <div className="flex items-center flex-col lg:flex-row gap-10">
        <BlurImage
          height={300}
          width={450}
          src="/images/contact.svg"
          className=" dark:opacity-20"
        />
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Don&apos;t be a Stranger!
          </h1>
          <div className="mt-6 text-xl space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              Shoot me an email if you think we&apos;re a great fit and would
              like to work with me and let&apos;s have a great time while
              we&apos;re at it.
            </p>
            <p>yassinehaimouch@proton.me</p>
          </div>
          <div className="flex gap-4 mt-6">
            <Link href="https://github.com/yassinehaimouch" target="_blank">
              <GitHubLogoIcon height={25} width={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yassinehaimouch"
              target="_blank"
            >
              <LinkedInLogoIcon height={25} width={25} />
            </Link>
            <Link href="https://www.instagram.com/gitcoder" target="_blank">
              <InstagramLogoIcon height={25} width={25} />
            </Link>
            <Link href="https://x.com/thegitcoder" target="_blank">
              <TwitterLogoIcon height={25} width={25} />
            </Link>
            <Link href="https://www.youtube.com/@thegitcoder" target="_blank">
              <Youtube height={25} width={25} />
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
