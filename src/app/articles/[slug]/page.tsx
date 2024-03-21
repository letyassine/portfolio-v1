import React, { FC } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlurImage from "@/components/BlurImage";

interface ArticleProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: ArticleProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const ogParams = new URLSearchParams();
  ogParams.set("heading", post.title);
  ogParams.set("type", "Blog Post");
  ogParams.set("mode", "dark");

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      type: "article",
      url: `/articles/${params.slug}`,
      images: [
        {
          url: `/og?title=${ogParams.toString()}`,
          width: 1920,
          height: 1080,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      images: [`/og?${ogParams.toString()}`],
    }
  };
};

const page: FC<ArticleProps> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  return (
    <MaxWidthWrapper className="max-w-3xl mb-64 mt-8 md:mt-16">
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
        <BlurImage
          src={post.image}
          height={1080}
          width={2280}
          alt={post.title}
        />
      </div>
      <article
        className="prose prose-quoteless prose-neutral dark:prose-invert text-lg"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </MaxWidthWrapper>
  );
};

export default page;
