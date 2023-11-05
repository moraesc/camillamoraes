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
        <span className="font-medium text-black">Camilla Moraes</span>{" "}
        <span className="text-gray-500 font-light">
          -- A frontend developer focused on building beautiful interfaces with
          seamless user experiences. Over the past few years I&apos;ve
          specifialized in developing first class experiences for enterprise
          companies and start ups.
        </span>
        <br></br>
        <p className="text-gray-500 font-light mt-6">
          A frontend developer focused on building beautiful interfaces with
          seamless user experiences. Over the past few years I&apos;ve
          specifialized in developing first class experiences for enterprise
          companies and start ups.
        </p>
      </p>
      <p className="text-[16px] md:text-[20px] mt-6 w-full md:w-[600px] leading-16 text-gray-500 font-light">
        Currently working at Sound.xyz.
      </p>
    </>
  );
};
