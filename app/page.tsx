"use client";

import React from "react";
import "./globals.css";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function Main() {
  const router = useRouter();
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#9bc1fe80", "#232323cf", "#ffc0d780"]
  )
  
  return (
    <motion.div className="h-[100vh] w-full bg-[#232323] flex justify-center items-center margin-0 relative" style={{background}} >
      <motion.div
        className='rounded-[30px] w-[300px] h-[300px] bg-[#232323] opacity-[.25] absolute top-[calc(50%_-_150px)] left-[calc(50%_-_150px)]'
      />
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        style={{x}}
      >
        <motion.div className='flex flex-col absolute h-[180px] w-[180px] top-[calc(50%_-_180px/2)] left-[calc(50%_-_180px/2)] relative justify-center'>
          <div className='flex flex-col leading-10'>
            <span className="text-[38px] text-white font-semibold items-center">CAMILLA</span>
            <span className="text-[38px] text-white font-semibold">MORAES</span>
          </div>
        </motion.div>
      </motion.div>
      <span
          className="text-[14px] text-white font-semibold text-[#e7cfb0] hover:cursor-pointer absolute top-[calc(50%_+_180px)]"
          onClick={() => router.push("/home")}
        >
          ENTER
      </span>
    </motion.div>
  );
}
