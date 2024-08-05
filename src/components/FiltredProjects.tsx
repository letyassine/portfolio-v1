"use client";
import React, { useState, useId, FC } from "react";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import BlurImage from "./BlurImage";
import Link from "next/link";

interface ProjectProps {
  name: string;
  description: string;
  demo: string;
  github: string;
  img: string;
  projectTags: string[];
}

interface FilterProps {
  tagsItems: string[];
  tags: string[];
  onSetTags: Function;
  disabledTags: string[];
}

const Project: FC<ProjectProps> = ({
  name,
  description,
  demo,
  github,
  img,
  projectTags,
}) => {
  return (
    <article className="dark:bg-gray-900 border border-gray-100 dark:border-none shadow-lg rounded-lg overflow-hidden">
      <div>
        <BlurImage
          src={img}
          height={1080}
          width={2280}
          className="w-full h-full"
          alt={name}
        />
      </div>
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold sm:text-2xl">{name}</h1>
        <p className="line-clamp-3 w-full pt-3 text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <ul className="flex gap-3 mt-2">
          {projectTags.map((tag) => (
            <li className="text-blue-500" key={tag}>
              #{tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 mt-6">
          <Link
            href={demo}
            target="_blank"
            className="bg-slate-800 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
          >
            Demo
          </Link>
          <Link
            href={github}
            target="_blank"
            className="bg-slate-800 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
};

const Filter: FC<FilterProps> = ({
  tagsItems,
  tags,
  onSetTags,
  disabledTags,
}) => {
  const id = useId();
  return (
    <div className="mt-8">
      <ul className="flex flex-wrap gap-2">
        {tagsItems.map((el) => (
          <li
            onClick={() => {
              if (disabledTags.includes(el)) {
                if (tags.includes(el)) {
                  onSetTags(tags.filter((item: string) => item !== el));
                } else {
                  onSetTags([...tags, el]);
                }
              }
            }}
            className={cn(
              "py-1 px-4 rounded-full border border-purple-400 dark:hover:bg-purple-500 hover:bg-purple-300 duration-300 cursor-pointer select-none",
              tags.includes(el) ? "bg-purple-300 dark:bg-purple-500" : "",
              !disabledTags.includes(el)
                ? "cursor-not-allowed border-gray-300 text-gray-300 dark:border-gray-700 dark:text-gray-700 dark:hover:bg-opacity-0 hover:bg-opacity-0"
                : ""
            )}
            key={`tag-${el + id}`}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

const matchTags = (current: string[], target: string[]) => {
  return target.every((tag) => current.includes(tag));
};

const FiltredProjects: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const tagsItems: string[] = [
    "reactjs",
    "nextjs",
    "tailwindcss",
    "framermotion",
    "redux",
  ];
  let filtredProjects = projects.filter((proj) =>
    matchTags(proj.projectTags, tags)
  );

  let filtredTags = filtredProjects.map((prj) => prj.projectTags).flat(1);

  return (
    <div>
      <Filter
        disabledTags={filtredTags}
        tagsItems={tagsItems}
        tags={tags}
        onSetTags={setTags}
      />
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {filtredProjects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            demo={project.demo}
            github={project.github}
            img={project.img}
            projectTags={project.projectTags}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FiltredProjects;
