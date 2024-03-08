import React from "react";
import { cn } from "@/lib/utils";

const Diamond = ({ className }: { className: string }) => {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 123 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        `duration-150 group-hover:text-[#F8B5B9]`,
        className
      )}
    >
      <path
        d="M57.8934 1.46447C59.846 -0.488153 63.0118 -0.488158 64.9645 1.46446L121.393 57.8934C123.346 59.846 123.346 63.0118 121.393 64.9645L64.9645 121.393C63.0118 123.346 59.846 123.346 57.8934 121.393L1.46447 64.9645C-0.488153 63.0118 -0.488158 59.846 1.46446 57.8934L57.8934 1.46447Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Diamond;
