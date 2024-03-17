import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - Yassine Haimouch",
  description: "This is a description",
};

const Contact = () => {
  return <MaxWidthWrapper>Contact</MaxWidthWrapper>;
};

export default Contact;
