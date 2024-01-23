"use client";

import React from "react";
import BottomNav from "../BottomNav";
import "../globals.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full">
      <div className="flex justify-center flex-col">
        <h3 className="text-[32px] md:text-[50px] font-medium shimmer cursor-default">
          ABOUT
        </h3>
        <p className="text-[14px] md:text-[16px] mt-6 w-full md:w-[600px] leading-16 text-[#63635e]">
          <span>
            Over the past 5 years, I&apos;ve specialized in building frontends
            using React, Typescript and NextJS with backends hosted on AWS. In
            addition to web development, I&apos;ve become passionate about
            building 3D designs and animations and creating AI generated art.
          </span>
          <br></br>
          <p className='mt-6 text-[#63635e]'>
            I love building creative products that have a profound
            impact on my end users.
          </p>
          <p className="mt-6 text-[#63635e]">
            Contact me to work together!
          </p>
          <div className='mt-6 flex gap-4'>
            <a href='https://www.linkedin.com/in/camilla-moraes-044266103/' target='_blank'>
              <Image src='/static/images/linkedin-icon.png' alt='linkedin' width={24} height={24} />
            </a>
            <a href='https://github.com/moraesc' target='_blank'>
              <Image src='/static/images/github-icon.png' alt='github' width={24} height={24} />
            </a>
            <a href='https://twitter.com/home' target='_blank'>
              <Image src='/static/images/x-icon.png' alt='x' width={24} height={24} />
            </a>
            <a href='mailto:cmoraes1955@gmail.com' target='_blank'>
              <Image src='/static/images/email-icon.png' alt='email' width={24} height={24} />
            </a>
          </div>
        </p>
      </div>
      <div className="flex margin-auto absolute bottom-[15%] md:bottom-[10%] justify-center w-full pt-24">
        <BottomNav />
      </div>
    </div>
  );
}
