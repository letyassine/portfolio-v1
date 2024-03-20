import React, { FC } from "react";
import { Metadata } from "next";
import BlurImage from "@/components/BlurImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { projects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projects | Yassine Haimouch",
  description: "Projects created by Yassine Haimouch",
};

interface ProjectProps {
  name: string;
  description: string;
  demo: string;
  github: string;
  img: string;
}

const Project: FC<ProjectProps> = ({
  name,
  description,
  demo,
  github,
  img,
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
        <div className="flex items-center gap-3 pt-4">
          <Link
            href={demo}
            target="_blank"
            className="bg-slate-800 mt-8 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
          >
            Demo
          </Link>
          <Link
            href={github}
            target="_blank"
            className="bg-slate-800 mt-8 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects: FC = () => {
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Projects 📂</h1>
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            demo={project.demo}
            github={project.github}
            img={project.img}
            key={project.id}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
