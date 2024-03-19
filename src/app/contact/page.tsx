import BlurImage from "@/components/BlurImage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - Yassine Haimouch",
  description: "This is a description",
};

const Contact = () => {
  return (
    <MaxWidthWrapper className="h-[80vh] flex flex-col md:flex-row items-center gap-5">
      <div>
        <h1 className="text-4xl font-bold">Dont be a Stranger!</h1>
        <p className="text-xl md:max-w-[80%] mt-8">
          Shoot me an email if you think were a great fit and would like to work
          with me and lets have a great time while were at it.
        </p>
        <p className="text-xl mt-4">yassinehaimouch@gmail.com</p>
        <p className="mt-4 underline cursor-pointer">Download My Resume</p>
      </div>
      <BlurImage width={765} height={459} className="md:w-[900px] w-[300px]" src="/images/www/cnt.png"/>
    </MaxWidthWrapper>
  );
};

export default Contact;
