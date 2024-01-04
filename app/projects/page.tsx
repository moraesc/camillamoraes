"use client";

import React, { useState } from "react";
import { WorkItem } from "../WorkItem";
import AIArtGalleryContent from "../AIArtGalleryContent";
import WavesContent from "../WavesContent";
import SplineContent from "../SplineContent";
import BottomNav from "../BottomNav";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function Projects() {
  const router = useRouter();
  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full flex-col">
      <div className="flex flex-col justify-center w-[900px]r">
        <p className="text-[14px] md:text-[54px] mb-4 font-medium px-2">
          PROJECTS
        </p>
        <div className="flex flex-col gap-2">
          <div
            onClick={() => router.push("/projects/aiart")}
            className="flex gap-2 items-center w-[750px] justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2">
              <span className="font-semibold">AI Art Gallery</span>
              <span className="text-[#6f6f6f]">
                A digital gallery with art generated by MidJourney and DALL•E
              </span>
            </div>
            <div className="bg-[#6f6f6f] h-[1px] relative" />
            <p className="text-[#6f6f6f]">Present</p>
          </div>
          <div
            onClick={() => router.push("/projects/waves")}
            className="flex gap-2 items-center w-full justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2">
              <span className="font-semibold">Waves NFT</span>
              <span className="text-[#6f6f6f] no-wrap">
                5000 randomly generated sound waves
              </span>
            </div>
            <p className="text-[#6f6f6f]">2021</p>
          </div>
          <div
            onClick={() => router.push("/projects/spline")}
            className="flex gap-2 items-center w-full justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2">
              <span className="font-semibold">Spline Explorations</span>
              <span className="text-[#6f6f6f] no-wrap">
                3D animations created in Spline
              </span>
            </div>
            <div className="bg-[#6f6f6f] h-[1px]" />
            <p className="text-[#6f6f6f]">Present</p>
          </div>
          <div className="flex gap-2 items-center w-full justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md">
            <div className="flex gap-2">
              <span className="font-semibold">MIM Art Gallery</span>
              <span className="text-[#6f6f6f] no-wrap">
                NYC apartment art gallery
              </span>
            </div>
            <div className="bg-[#6f6f6f] h-[1px]" />
            <p className="text-[#6f6f6f]">COMING SOON</p>
          </div>
        </div>
      </div>
      <div className="flex margin-auto absolute bottom-16 justify-center w-full pt-24">
        <BottomNav />
      </div>
    </div>
  );
}