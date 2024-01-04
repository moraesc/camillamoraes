"use client";

import React from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  return (
    <div className="h-[100vh] w-full bg-[#232323] flex justify-center align-center items-center">
      <div className="flex flex-col leading-10">
        <span className="text-[38px] text-white font-semibold">CAMILLA</span>
        <span className="text-[40px] text-white font-semibold">MORAES</span>
        <span
          className="text-[12px] text-white font-semibold text-[#e7cfb0] hover:cursor-pointer"
          onClick={() => router.push("/home")}
        >
          ENTER
        </span>
      </div>
    </div>
  );
}
