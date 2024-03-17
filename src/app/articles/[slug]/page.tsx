import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};

const page = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  return (
    <MaxWidthWrapper className="max-w-3xl my-8 md:mt-16">
      <div className="flex items-center justify-between">
        <Link className="hover:text-slate-400 duration-300" href="/articles">
          ← Back to Articles
        </Link>
        <time dateTime={post.date} className="mb-1 text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <h1 className="text-5xl font-bold my-5">{post.title}</h1>
      <div className="mb-10">
        <Image src="/images/www/blog.png" height={1080} width={2280} alt="" />
      </div>
      <article
        className="prose prose-quoteless prose-neutral dark:prose-invert text-lg"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </MaxWidthWrapper>
  );
};

export default page;
