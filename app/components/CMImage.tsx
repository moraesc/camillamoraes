"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

export const CMImage = ({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) => {
  return (
    <div
      className={clsx("border-solid border-[8px] border-gray-900 rounded-lg")}
      style={{ width: width }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
