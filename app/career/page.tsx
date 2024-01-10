"use client";

import React, { useState } from "react";
import { WorkItem } from "../WorkItem";
import BottomNav from "../BottomNav";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function Career() {
  const router = useRouter();
  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full flex-col">
      <div className="flex flex-col w-full md:max-w-[720px]">
        <h3 className="text-[32px] md:text-[54px] mb-4 font-medium px-2">
          CAREER
        </h3>
        <div className="flex flex-col md:gap-2 w-full md:w-[900px]">
          <div
            onClick={() => router.push("/career/sound")}
            className="flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2">
              <span className="font-semibold">Sound.xyz</span>
              <span className="text-[#6f6f6f] hidden md:flex">A music NFT platform</span>
            </div>
            <div className="bg-[#6f6f6f] h-[1px] relative" />
            <p className="text-[#6f6f6f] text-[14px] md:text-[16]">2022 - 2023</p>
          </div>
          <div
            onClick={() => router.push("/career/aws")}
            className="flex items-center  justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2">
              <span className="font-semibold">Amazon Web Services</span>
              <span className="text-[#6f6f6f] hidden md:flex">
                Building apps for clients on AWS
              </span>
            </div>
            <div className="bg-[#6f6f6f] h-[1px]" />
            <p className="text-[#6f6f6f] text-[14px] md:text-[16]">2019 - 2022</p>
          </div>
        </div>
      </div>
      <div className="flex margin-auto absolute bottom-[10%] justify-center w-full">
        <BottomNav />
      </div>
    </div>
  );
}
