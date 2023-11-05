"use client";

import React from "react";

export const Skill = ({ title }: { title: string }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-500 px-2 opacity-85 rounded-lg py-2 text-white shadow-lg text-center w-full text-[11px] md:text-[14px] shimmer cursor-default">
      {title}
    </div>
  );
};
