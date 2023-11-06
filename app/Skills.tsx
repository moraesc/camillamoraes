"use client";

import React from "react";
import { Skill } from "./Skill";
import { CMImage } from "./components/CMImage";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">Frameworks</p>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          <Skill title="ReactJS" />
          <Skill title="VueJS" />
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">Programming Languages</p>
        <div className="grid grid-cols-3 lg:grid-cols-4  gap-4">
          <Skill title="Javascript" />
          <Skill title="HTML" />
          <Skill title="CSS" />
          <Skill title="Typescript" />
          <Skill title="Python" />
          <Skill title="GraphQL" />
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">AWS</p>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          <Skill title="Lambda" />
          <Skill title="DynamoDB" />
          <Skill title="S3" />
          <Skill title="CloudFormation" />
          <Skill title="Amplify" />
          <Skill title="Route53" />
          <Skill title="Cloudfront" />
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] mb-2">Tooling</p>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          <Skill title="Git" />
          <Skill title="Figma" />
          <Skill title="Vercel" />
          <Skill title="Sketch" />
        </div>
      </div>
    </div>
  );
};
