import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Metadata } from "next";
import React from "react";
import BlurImage from "@/components/BlurImage";

export const metadata: Metadata = {
  title: "Projects - Yassine Haimouch",
  description: "This is a description",
};

const topics = [
  "web development",
  "react js",
  "tailwind css",
  "next js",
  "web development",
  "react js",
  "tailwind css",
  "next js",
];

const Filter = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <span
          className="text-slate-500 border border-slate-600 hover:bg-slate-600 hover:text-slate-300 rounded-full py-1 px-3 cursor-pointer duration-300 ease-in-out"
          key={topic}
        >
          {topic}
        </span>
      ))}
    </div>
  );
};

const Project = () => {
  return (
    <article className="bg-slate-900 rounded-lg overflow-hidden">
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
        <h1 className="text-xl font-bold">Project 1</h1>
        <p className="line-clamp-3 w-full pt-3 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          placeat a animi odit temporibus, velit eveniet corrupti quod
          consequuntur est at repellat, qui fugit earum saepe porro quis
          distinctio nihil?
        </p>
        <div className="flex items-center gap-3 pt-4">
          <button className="bg-slate-800 py-2 px-4 rounded-md">Demo</button>
          <button className="bg-slate-800 py-2 px-4 rounded-md">GitHub</button>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <MaxWidthWrapper className="my-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">All Projects ✨</h1>
        <input
          type="text"
          placeholder="search"
          className="bg-slate-700 px-3 rounded-md"
        />
      </div>
      <Filter />
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
