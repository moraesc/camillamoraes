"use client";

import React from "react";
import "./globals.css";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Main() {
  const router = useRouter();
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#9bc1fe80", "#232323cf", "#ffc0d780"]
  );

  const lineAnimation = {
    rest: { opacity: 1, x: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      width: 115,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="h-[100vh] w-full bg-[#232323] flex justify-center items-center margin-0 relative"
      style={{ background }}
    >
      <div className="flex flex-col leading-10">
        <span className="text-[38px] text-white font-semibold items-center">
          CAMILLA
        </span>
        <span className="text-[40px] text-white font-semibold">MORAES</span>
        <motion.div
          className="text-[14px] text-white font-semibold text-[#e7cfb0] hover:cursor-pointer flex items-center gap-2"
          onClick={() => router.push("/home")}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            className="h-[2px] w-[10px] bg-white"
            variants={lineAnimation}
          />

          <motion.div initial="initial" whileHover="hover">
            <p>ENTER</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
