"use client";

import "../globals.css";
import clsx from "clsx";
import BottomNav from "../BottomNav";
import Image from "next/image";
import { useModeStore } from "../store";

export default function Landing() {
  const state: any = useModeStore()

  const isDarkMode = state.mode === 1

  return (
    <div className="relative px-6 flex justify-center h-[100vh] w-full flex-col items-center">
      <div className="flex flex-col justify-center">
          <h1 className="text-[38px] md:text-[50px] justify-center shimmer w-full">
            <p className='leading-[50px] no-wrap flex gap-6'>CAMILLA  <span
                className={clsx(
                  "spin-icon bg-[#232323] rounded-[100px] w-[24px] h-[24px] md:w-[45px] md:h-[45px] flex items-center justify-center inline cursor-pointer group hidden md:flex",
                  isDarkMode && "bg-white"
                )}
              >
                <Image
                  src="/static/images/icon.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </span> MORAES</p>
          </h1>
          <div className='leading-[10px] justify-between w-full mt-4 items-baseline hidden md:flex'>
            <p className="text-[14px] md:text-[16px] mt-4 text-[#63635e]">Frontend Developer</p>
            <p>•</p>
            <p className="text-[14px] md:text-[16px] mt-4 text-[#63635e]">Product Manager</p>
            <p>•</p>
            <p className="text-[14px] md:text-[16px] mt-4 text-[#63635e]">Web Designer</p>
          </div>
          <div className='leading-[10px] justify-between w-full items-baseline flex flex-col md:hidden'>
            <p className="text-[14px] md:text-[18px] mt-4 text-[#63635e]">Frontend Developer</p>
            <p className="text-[14px] md:text-[18px] mt-4 text-[#63635e]">Product Manager</p>
            <p className="text-[14px] md:text-[18px] mt-4 text-[#63635e]">Web Designer</p>
          </div>
      </div>
      <div className="flex margin-auto absolute bottom-[10%] justify-center w-full">
        <BottomNav />
      </div>
    </div>
  );
}
