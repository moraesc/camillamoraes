"use client";

import React from "react";
import "../../globals.css";
import { BackButton } from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AWSContent() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col w-full margin-auto items-center justify-center h-[100vh]">
        <div className="py-12 bg-no-repeat bg-cover rounded-b-lg px-8">
          <div className="flex justify-between w-full">
            <div className="flex gap-4 items-center relative right-8">
              <BackButton onClick={() => router.push("/career")} />
              <p className="text-[32px] font-semibold">Amazon Web Services</p>
            </div>
            <div className="flex">
              <a
                className="rounded-[90px] bg-[#232323] px-4 items-center text-[14px] cursor-pointer flex gap-2 items-center justify-center text-white"
                href="https://aws.amazon.com"
                target="_blank"
              >
                LIVE PROJECT
                <div className="rounded-[100px] bg-white w-[24px] h-[24px] items-center flex justify-center">
                  <Image
                    src="/static/images/diagonal_arrow.png"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 flex gap-12 justify-between w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">In Short</p>
              <p className="text-[14px] text-[#63635e] w-[400px]">
              I served as a Cloud Application Architect for Amazon Web Services for
              2.5 years. I worked closely with customers such as Otsuka, Medtronic
              and Merck to build the frontend and AWS infrastructure for their
              respective web apps.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Tools</p>
              <p className="text-[14px] text-[#63635e]">React</p>
              <p className="text-[14px] text-[#63635e]">Lambda</p>
              <p className="text-[14px] text-[#63635e]">CloudFormation</p>
              <p className="text-[14px] text-[#63635e]">Route53</p>
              <p className="text-[14px] text-[#63635e]">Amplify</p>
              <p className="text-[14px] text-[#63635e]">S3</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Timeline</p>
              <p className="text-[14px] text-[#63635e]">July 2019 - Feb 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
