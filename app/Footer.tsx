"use client";

import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="py-4 md:py-6 w-full bg-white flex justify-center gap-4 px-4">
      <a href="https://github.com/moraesc" target="_blank">
        <Image
          src="/static/images/github.png"
          alt="github"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/camilla-moraes-044266103/"
        target="_blank"
      >
        <Image
          src="/static/images/linkedin.png"
          alt="linkedin"
          width={20}
          height={20}
        />
      </a>
      <a href="https://twitter.com/moraes_c_" target="_blank">
        <Image
          src="/static/images/twitter_1.png"
          alt="x"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};
