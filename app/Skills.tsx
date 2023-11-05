"use client";

import React from "react";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 margin-auto justify-center w-full">
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">Frameworks</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:flex gap-4">
          <Skill title="ReactJS" />
          <Skill title="VueJS" />
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">Programming Languages</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4  gap-4">
          <Skill title="Javascript" />
          <Skill title="HTML" />
          <Skill title="CSS" />
          <Skill title="Typescript" />
          <Skill title="Python" />
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">AWS</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Skill title="Lambda" />
          <Skill title="S3" />
          <Skill title="CloudFormation" />
          <Skill title="Amplify" />
          <Skill title="Route53" />
          <Skill title="Cloudfront" />
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">Tooling</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Skill title="Git" />
          <Skill title="Figma" />
          <Skill title="Vercel" />
          <Skill title="Sketch" />
        </div>
      </div>
    </div>
  );
};
