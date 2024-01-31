"use client";

import React from "react";
import "../../globals.css";
import { BackButton } from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FramerContent() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col w-full margin-auto items-center justify-center h-[100vh]">
        <div className="py-12 bg-no-repeat bg-cover rounded-b-lg px-8">
          <div className="flex justify-between w-full">
            <div className="flex gap-2 md:gap-4 items-center relative right-[6px] md:right-8">
              <BackButton onClick={() => router.push("/projects")} />
              <h3 className="text-[24px] md:text-[32px] font-semibold">
                Framer Experiments
              </h3>
            </div>
            <div className="flex">
              <a
                className="rounded-[90px] bg-[#232323] px-4 items-center text-[14px] cursor-pointer flex gap-2 items-center justify-center text-white"
                href="https://framer-snippets.vercel.app/"
                target="_blank"
              >
                LIVE PROJECT
                <div className="rounded-[100px] bg-white w-[24px] h-[24px] items-center flex justify-center hidden md:flex">
                  <Image
                    src="/static/images/diagonal_arrow.png"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="rounded-[100px] bg-white w-[16px] h-[16px] items-center flex justify-center md:hidden">
                  <Image
                    src="/static/images/diagonal_arrow.png"
                    alt="arrow"
                    width={12}
                    height={12}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-12 justify-between w-full">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] font-medium">In Short</h4>
              <p className="text-[14px] md:w-[400px]">
                I created this website to get more experience using Framer
                Motion and so people, including myself, could easily copy and
                paste the code used to build these animations in other projects.
                This is a work in progress.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] font-medium">React</h4>
              <p className="text-[14px] ">Framer Motion</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] font-medium">Timeline</h4>
              <p className="text-[14px] ">2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
