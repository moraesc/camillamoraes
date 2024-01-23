import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useModeStore } from "./store";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const state: any = useModeStore();
  const isDarkMode = state.mode;

  const isHome = pathname === '/home'
  const isCareer = pathname === '/career'
  const isProjects = pathname === '/projects'
  const isAbout = pathname === '/about'

  return (
    <div className="p-2 w-[386px] md:w-[500px] flex justify-center border-opacity-50 rounded-[12px]">
      <div
        className={clsx(
          "w-full h-12 bg-[#232323] rounded-[12px] text-white flex gap-4 px-4 items-center justify-between",
          isDarkMode && "bg-white"
        )}
      >
        <div
          className={clsx(
            "w-full py-1 rounded-[8px] hover:bg-white hover:text-[#232323] justify-center text-[14px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isHome && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/home")}
        >
          Home
        </div>
        <div
          className={clsx(
            "w-full py-1 rounded-[8px] hover:bg-white hover:text-[#232323] justify-center text-[14px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isCareer && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/career")}
        >
          Career
        </div>
        <div
          className={clsx(
            "w-full py-1 rounded-[8px] hover:bg-white hover:text-[#232323] justify-center text-[14px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isProjects && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/projects")}
        >
          Projects
        </div>
        <div
          className={clsx(
            "w-full py-1 rounded-[8px] hover:bg-white hover:text-[#232323] justify-center text-[14px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isAbout && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/about")}
        >
          About
        </div>
      </div>
    </div>
  );
}
