import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Logo: FC = () => {
  const pathname = usePathname();
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-[32px] w-[32px]",
        pathname === "/" ? "text-purple-500" : ""
      )}
    >
      <path
        fill="currentColor"
        d="M0 22C13.9836 22 22 13.9836 22 0C22 13.9836 30.0164 22 44 22C30.0164 22 22 30.0164 22 44C22 30.0164 13.9836 22 0 22Z"
      />
    </svg>
  );
};

export default Logo;
