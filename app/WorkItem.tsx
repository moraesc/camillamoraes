"use client";

import clsx from "clsx";

export const WorkItem = ({
  company,
  description,
  timeline,
}: {
  company: string;
  description: string;
  timeline: string;
}) => {
  return (
    // <div
    //   className={clsx(
    //     "group relative flex flex-col gap-1 w-full md:w-full hover:text-gray-700 h-[220px] hover:cursor-pointer opacity-75 rounded-lg px-4 py-4 shadow-lg hover:bg-black shimmer"
    //   )}
    // >
    <div
      className={clsx(
        "group relative flex flex-col gap-1 w-full md:w-full hover:text-gray-700 h-[220px] hover:cursor-pointer rounded-lg px-4 py-4 shadow-lg bg-[#e7cfb0] bg-no-repeat shimmer"
      )}
    >
      <div className="flex justify-between">
        <h3
          className={clsx(
            "text-[16px] md:text-[22px] font-sansserif bg-black text-transparent bg-clip-text"
          )}
        >
          {company}
        </h3>
      </div>
      <p className={clsx("text-[12px] w-full")}>{description}</p>
      <p
        className={clsx(
          "text-[12px] text-gray-600 font-sansserif absolute bottom-4"
        )}
      >
        {timeline}
      </p>
    </div>
  );
};
