"use client";

import React from "react";
import BottomNav from "../BottomNav";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function Career() {
  const router = useRouter();
  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full flex-col">
      <div className="flex flex-col w-full md:max-w-[720px]">
        <h3 className="text-[32px] md:text-[50px] mb-4 font-medium px-2">
          CAREER
        </h3>
        <div className="flex flex-col md:gap-2">
          <div
            onClick={() => router.push("/career/sound")}
            className="flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2 items-baseline">
              <span className="text-[#21201c] font-medium">Sound.xyz</span>
              <span className="text-[#63635e] text-[14px] hidden md:flex">A music NFT platform</span>
            </div>
            <div className="bg-[#63635e] h-[1px] relative" />
            <p className="text-[#63635e] text-[14px]">2022 - 2023</p>
          </div>
          <div
            onClick={() => router.push("/career/aws")}
            className="flex items-center  justify-between cursor-pointer hover:bg-gray-100 px-2 py-3 rounded-md"
          >
            <div className="flex gap-2 items-baseline">
              <span className="text-[#21201c] font-medium">Amazon Web Services</span>
              <span className="text-[#63635e] text-[14px] hidden md:flex">
                Building apps for clients on AWS
              </span>
            </div>
            <div className="bg-[#63635e] h-[1px]" />
            <p className="text-[#63635e] text-[14px]">2019 - 2022</p>
          </div>
        </div>
      </div>
      <div className="flex margin-auto absolute bottom-[15%] md:bottom-[10%] justify-center w-full">
        <BottomNav />
      </div>
    </div>
  );
}
