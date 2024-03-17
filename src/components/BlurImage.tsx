"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, useState } from "react";

interface BlurImageProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  className?: string;
}

const BlurImage: FC<BlurImageProps> = ({
  width,
  height,
  src,
  alt,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "object-cover group-hover:opacity-75 duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-110",
        className
      )}
      onLoad={() => setIsLoading(false)}
    />
  );
};

export default BlurImage;
