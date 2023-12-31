"use client";

import React from "react";
import "../../globals.css";
import { BackButton } from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AIArtContent() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col w-full margin-auto items-center justify-center h-[100vh]">
        <div className="py-12 bg-no-repeat bg-cover rounded-b-lg px-8">
          <div className="flex justify-between w-full">
            <div className="flex gap-4 items-center relative right-8">
              <BackButton onClick={() => router.push("/projects")} />
              <p className="text-[32px] font-semibold">AI Art Gallery</p>
            </div>
            <div className="flex">
              <a
                className="rounded-[90px] bg-[#232323] px-4 items-center text-[14px] cursor-pointer flex gap-2 items-center justify-center text-white"
                href="https://aigalleryart.xyz"
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
              In February 2023 I began creating art using a variety of AI tools, but
              found the most success with Midjourney and DALL•E. I created an
              Instagram account to share my work and after gaining to 600 followers
              within the first few months, expanded to TikTok by using AI video
              creation tools such as Kaiber AI. Recently, I built a website as another
              way to showcase the art.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Tools</p>
              <p className="text-[14px] text-[#63635e]">React</p>
              <p className="text-[14px] text-[#63635e]">MidJourney</p>
              <p className="text-[14px] text-[#63635e]">DALL•E</p>
              <p className="text-[14px] text-[#63635e]">ChatGPT</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Timeline</p>
              <p className="text-[14px] text-[#63635e]">Feb 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
