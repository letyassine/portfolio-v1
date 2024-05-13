---
title: How to generate dynamic OG image with NextJs
date: 2024-05-13
image: "/images/posts/og.png"
summary: "An Open Graph image or OG image is the image that is displayed on social media accounts when you or someone else post a link to an article or a video from your website"
---

## Introduction

An Open Graph image or OG image is the image that is displayed on social media accounts when you or someone else post a link to an article or a video from your website.

## Steps

#### Step 1: Add image inside public folder that has empty space `og-bg.jpg`

![background-image](https://gitcoder.vercel.app/og)

#### Step 2: Create new folder inside app directory and name it OG then create `route.tsx` (jsx) file

```tsx
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',  
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(http://localhost:3000/og-bg.jpg)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
```

### The Result `http://localhost:3000/og?title=HelloWorld`

![background-image](https://gitcoder.vercel.app/og?title=HelloWorld)

#### Then you can use it in generateMetaData function

```tsx
export const generateMetadata = ({ params }: ArticleProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  let { title, date: publishedTime, summary: description } = post;
  let ogImage = `/og?title=${title}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/articles/${post._raw.flattenedPath}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `/articles/${post._raw.flattenedPath}`,
      images: [
        {
          url: ogImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};
```

Happy coding, Check my [GitHub repo](https://github.com/yassinehaimouch/gitcoder.vercel.app)
