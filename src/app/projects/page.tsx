import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Metadata } from "next";
import React from "react";
import BlurImage from "@/components/BlurImage";

export const metadata: Metadata = {
  title: "Projects - Yassine Haimouch",
  description: "This is a description",
};

const Project = () => {
  return (
    <article className="dark:bg-gray-900 border border-gray-100 dark:border-none shadow-lg rounded-lg overflow-hidden">
      <div>
        <BlurImage
          src="/images/www/blog.png"
          height={1080}
          width={2280}
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold sm:text-2xl">Improve the Performance of your React Forms</h1>
        <p className="line-clamp-3 w-full pt-3 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          placeat a animi odit temporibus, velit eveniet corrupti quod
          consequuntur est at repellat, qui fugit earum saepe porro quis
          distinctio nihil?
        </p>
        <div className="flex items-center gap-3 pt-4">
          <button className="bg-slate-800 mt-8 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300">Demo</button>
          <button className="bg-slate-800 mt-8 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300">GitHub</button>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <MaxWidthWrapper className="my-8">
      <h1 className="text-3xl font-bold">All Projects ✨</h1>
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
