"use client";

import React from "react";
import BottomNav from "../BottomNav";
import { Skill } from "../Skill";
import "../globals.css";

export default function Skills() {
  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full">
      <div className="flex justify-center w-[900px] flex-col">
        <p className="text-[26px] md:text-[54px] mb-8 font-medium justify-center margin-auto">
          SKILLS
        </p>
        <div className="flex justify-between">
          <div>
            <p className="text-[16px] md:text-[20px] mb-2 font-semibold">
              Frameworks
            </p>
            {/* <div className="grid grid-cols-3 lg:grid-cols-4 gap-4"> */}
            <div className="flex flex-col gap-2 text-[18px]">
              <p>ReactJS</p>
              <p>VueJS</p>
              {/* <Skill title="ReactJS" />
              <Skill title="VueJS" /> */}
            </div>
          </div>
          <div>
            <p className="text-[16px] md:text-[20px] mb-2 font-semibold">
              Programming Languages
            </p>
            {/* <div className="grid grid-cols-3 lg:grid-cols-4 gap-4"> */}
            <div className="flex flex-col gap-2 text-[18px]">
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>TypeScript</p>
              <p>Python</p>
              <p>GraphQL</p>
              {/* <Skill title="Javascript" />
              <Skill title="HTML" />
              <Skill title="CSS" />
              <Skill title="Typescript" />
              <Skill title="Python" />
              <Skill title="GraphQL" /> */}
            </div>
          </div>
          <div>
            <p className="text-[16px] md:text-[20px] mb-2 font-semibold">AWS</p>
            {/* <div className="grid grid-cols-3 lg:grid-cols-4 gap-4"> */}
            <div className="flex flex-col gap-2 text-[18px]">
              <p>Lambda</p>
              <p>DynamoDB</p>
              <p>S3</p>
              <p>CloudFormation</p>
              <p>JavaScript</p>
              <p>Amplify</p>
              <p>Route53</p>
              {/* <Skill title="Lambda" />
              <Skill title="DynamoDB" />
              <Skill title="S3" />
              <Skill title="CloudFormation" />
              <Skill title="Amplify" />
              <Skill title="Route53" />
              <Skill title="Cloudfront" /> */}
            </div>
          </div>
          <div>
            <p className="text-[16px] md:text-[20px] mb-2 font-semibold">
              Tooling
            </p>
            {/* <div className="grid grid-cols-3 lg:grid-cols-4 gap-4"> */}
            <div className="flex flex-col gap-2 text-[18px">
              <p>Git</p>
              <p>Figma</p>
              <p>Vercel</p>
              {/* <Skill title="Git" />
              <Skill title="Figma" />
              <Skill title="Vercel" />
              <Skill title="Sketch" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex margin-auto absolute bottom-16 justify-center w-full pt-24">
        <BottomNav />
      </div>
    </div>
  );
}
