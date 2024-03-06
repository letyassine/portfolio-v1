import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return <div className={cn(" max-w-7xl mx-auto", className)}>{children}</div>;
};

export default MaxWidthWrapper;
