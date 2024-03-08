import React from "react";
import { cn } from "@/lib/utils";

const Heart = ({ className }: { className: string }) => {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 127 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        `duration-150 group-hover:text-[#005C8C]`,
        className
      )}
    >
      <path
        d="M116.116 9.63013C103.834 -3.16951 83.8893 -3.16951 71.6065 9.63013L66.8501 14.5595C64.8817 16.5995 61.6127 16.5966 59.6478 14.5532L54.8849 9.59973C42.5717 -3.19991 22.6578 -3.19991 10.375 9.59973C-3.45833 23.9803 -3.45833 47.3298 10.375 61.7104L59.6402 113.015C61.6075 115.064 64.8843 115.065 66.8522 113.016L116.116 61.7408C129.95 47.3602 129.95 24.0107 116.116 9.63013Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Heart;
