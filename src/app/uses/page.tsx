import React, { FC } from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
  title: "Uses | Yassine Haimouch",
  description: "Frontend developer, Content creator, and Public speaker",
};

const Uses: FC = () => {
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Uses 💻</h1>
      <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert mt-8">
        <h3>Computer / Office</h3>
        <ul>
          <li>15&quot; Macbook (2023)</li>
          <li>keyboard SK61 Black</li>
          <li>Sony CH-720N</li>
        </ul>
        <h3>Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://github.com/yassinehaimouch/my-vscode-settings">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: Night Owl (dark)</li>
          <li>Terminal: zsh</li>
        </ul>
        <h3>Software</h3>
        <ul>
          <li>Brave Browser</li>
          <li>Figma</li>
          <li>Spotify</li>
        </ul>
        <h3>Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default Uses;
