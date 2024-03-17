import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { Metadata } from "next";
import React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Articles - Yassine Haimouch",
  description: "Read my thoughts on software development, design, and more.",
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

const PostCard = (post: Post) => {
  return (
    <article className="bg-slate-900 flex flex-col justify-between px-5 py-6 md:px-8 rounded-lg">
      <div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div
          className="line-clamp-3 text-lg w-full pt-3 text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
      <div className="flex items-center justify-between pt-8">
        <PrimaryButton className="font-semibold" href={post.url}>
          Read Article →
        </PrimaryButton>
        <p>
          Time to read <br />~ 6 minutes
        </p>
      </div>
    </article>
  );
};

const Blog = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <MaxWidthWrapper className="my-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">All Articles 🌿</h1>
        <input
          type="text"
          placeholder="search"
          className="bg-slate-700 px-3 rounded-md"
        />
      </div>
      <Filter />
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Blog;
