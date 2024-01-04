"use client";

import React from "react";
import "./globals.css";
import { BackButton } from "./components/BackButton";
import { Skill } from "./Skill";

export default function AWSContent({
  onBackClick,
}: {
  onBackClick: () => void;
}) {
  return (
    <div className="margin-auto justify-center flex flex-col w-full  rounded-lg rounded-lg px-4 py-4 shadow-lg">
      <div className="max-h-[75%] overflow-scroll">
        <div className="flex gap-2 items-center mb-8 ">
          <BackButton onClick={onBackClick} />
          <p className="text-gray-900 text-[20px] font-medium">
            Amazon Web Services
          </p>
        </div>
        <p className="text-[14px] text-[#63635e]">
          I served as a Cloud Application Architect for Amazon Web Services for
          2.5 years. I worked closely with customers such as Otsuka, Medtronic
          and Merck to build the frontend and AWS infrastructure for their
          respective web apps.
        </p>
        <p className="text-[16px] font-medium mt-8 mb-2">Skills Developed</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Skill title="Lambda" />
          <Skill title="CloudFormation" />
          <Skill title="Amplify" />
          <Skill title="S3" />
          <Skill title="Route53" />
        </div>
      </div>
    </div>
  );
}
