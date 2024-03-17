import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-slate-800 hover:bg-slate-700 rounded-full py-2 px-4 duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
