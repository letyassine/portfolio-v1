import BlurImage from "@/components/BlurImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className="md:h-[calc(100vh-48px-40px)] mt-20 md:mt-0 flex items-center">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <BlurImage
              height={800}
              width={800}
              src="/images/me.png"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-[2.7rem] leading-[1] dark:text-zinc-100 animate-slide-top">
            Hi 👋🏻 I’m Yassine <br />
            Software engineer mainly focused on Web Development
          </h1>
          <div className="animate-slide-top [animation-fill-mode:backwards] [animation-delay:300ms] mt-6 text-md space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              Welcome to my digital nook. I&apos;m a Software Engineer, content
              creator, and public speaker. And here, I share what I&apos;ve been
              working on recently and things I learned along the way.
            </p>
          </div>
          <div className="flex gap-4 mt-6 animate-slide-top [animation-fill-mode:backwards] [animation-delay:800ms]">
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
}
