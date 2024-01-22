import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useModeStore } from "./store";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const state: any = useModeStore();
  const isDarkMode = state.mode;
  // const pathname = router

  console.log('pathname: ', pathname)

  const isHome = pathname === '/home'
  const isCareer = pathname === '/career'
  const isProjects = pathname === '/projects'
  const isAbout = pathname === '/about'

  return (
    <div className="p-2 w-[386px] md:w-[550px] flex justify-center border-opacity-50 rounded-[90px]">
      <div
        className={clsx(
          "w-full h-14 bg-[#232323] rounded-[92px] text-white flex gap-4 p-4 items-center justify-between",
          isDarkMode && "bg-white"
        )}
      >
        <div
          className={clsx(
            "w-full py-2 rounded-[80px] hover:bg-white hover:text-[#232323] justify-center text-[16px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isHome && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/home")}
        >
          Home
        </div>
        <div
          className={clsx(
            "w-full py-2 rounded-[80px] hover:bg-white hover:text-[#232323] justify-center text-[16px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isCareer && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/career")}
        >
          Career
        </div>
        <div
          className={clsx(
            "w-full py-2 rounded-[80px] hover:bg-white hover:text-[#232323] justify-center text-[16px] cursor-pointer flex",
            isDarkMode && "text-[#232323]", isProjects && 'bg-white text-[#232323]'
          )}
          onClick={() => router.push("/projects")}
        >
          Projects
        </div>
        <div
          className={clsx(
            "w-full py-2 rounded-[80px] hover:bg-white hover:text-[#232323] justify-center text-[16px] cursor-pointer flex",
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
