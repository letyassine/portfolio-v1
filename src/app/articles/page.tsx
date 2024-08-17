import React, { FC } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
  title: "Articles | Yassine Haimouch",
  description: "Read my thoughts on software development, design, and more.",
};

const ArticleCard: FC<Post> = (post) => {
  return (
    <article className="flex flex-col justify-between px-5 py-6 md:px-8 rounded-lg border border-gray-100 dark:border-none shadow-lg dark:bg-gray-900 ">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="mt-2 block text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div
          className="line-clamp-3 mt-6 md:text-lg w-full text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
      <Link
        href={post.url}
        className={
          "bg-slate-800 mt-8 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
        }
      >
        Read Article →
      </Link>
    </article>
  );
};

const Articles: FC = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Articles 📝</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8">
        {posts.map((post, idx) => (
          <ArticleCard key={idx} {...post} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Articles;
