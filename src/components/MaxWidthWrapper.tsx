import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return (
    <div className={cn("max-w-screen-lg mx-auto w-full px-2.5", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
