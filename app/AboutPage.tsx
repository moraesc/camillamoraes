"use client";

import React from "react";

export const AboutPage = () => {
  return (
    <>
      <p className="text-[40px] md:text-[50px] font-medium shimmer cursor-default">
        -CM-
      </p>
      <div className="w-[140px] md:w-[200px] h-[1px] bg-black mt-4"></div>
      <p className="text-[16px] md:text-[20px] mt-6 w-full md:w-[600px] leading-16">
        <span className="text-gray-500 font-light">
          Over the past 4 years, I&apos;ve specialized in building frontends
          using React, Typescript and NextJS and backends hosted on AWS. In
          addition to web development, I&apos;ve become passionate about
          building 3D designs and animations and creating AI generated art.
        </span>
        <br></br>
        <p className="text-gray-500 font-light mt-6">
          I love building products with creative designs that have a profound
          impact on my end users and am always looking for new ways to expand my
          engineering skills in diverse areas.
        </p>
      </p>
      <p className="text-[16px] md:text-[20px] mt-8 w-full md:w-[600px] leading-16 text-gray-900 font-medium shimmer">
        <a href="mailto:cmoraes1955@gmail.com">
          Email me to connect and collaborate
        </a>
      </p>
    </>
  );
};
