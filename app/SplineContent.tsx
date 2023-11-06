"use client";

import React from "react";
import "./globals.css";
import Spline from "@splinetool/react-spline";
import { BackButton } from "./components/BackButton";

export default function SplineContent({
  onBackClick,
}: {
  onBackClick: () => void;
}) {
  return (
    <div className="flex flex-col w-full rounded-lg rounded-lg px-4 py-4 shadow-lg pb-6 mb-20 md:pb-12 md:mb-24">
      <div className="flex gap-2 items-center mb-8">
        <BackButton onClick={onBackClick} />
        <p className="text-gray-900 text-[20px] font-medium">
          Spline Explorations
        </p>
      </div>
      <p className="text-[14px] font-gray-600">
        I created the following animations using a 3d Design Tool called{" "}
        <a
          href="https://spline.design/"
          target="_blank"
          className="font-medium"
        >
          Spline.{" "}
        </a>
      </p>
      <p className="text-[16px] font-medium mt-8 mb-4">Animated Blob</p>
      <div className="rounded-lg shadow-lg">
        <Spline scene="https://prod.spline.design/i0odUMk5MkgRlK7q/scene.splinecode" />
      </div>
      <p className="text-[16px] font-medium mt-8 mb-1">Follow Effect</p>
      <div>
        <p className="text-[12px] text-gray-500 mb-4">
          Move your mouse across the container to see the blobs move
        </p>
        <div className="shadow-lg rounded-lg">
          <Spline scene="https://prod.spline.design/SqxnLRyDp7FOsPQN/scene.splinecode" />
        </div>
      </div>
      <p className="text-[14px] font-medium mt-8 mb-4">Morphing Sphere</p>
      <div className="shadow-lg rounded-lg">
        <Spline scene="https://prod.spline.design/w-1SVnx0OvWSU4bY/scene.splinecode" />
      </div>
      <div>
        <p className="text-[16px] font-medium mt-8 mb-1">
          Interactive Keyboard
        </p>
        <p className="text-[16px] text-gray-500 mb-4">
          Press the 1, 2, 3, or 4 keys on your keyboard to use the virtual
          keyboard
        </p>
        <div className="shadow-lg rounded-lg">
          <Spline scene="https://prod.spline.design/ocCKWWSigsJa8k6y/scene.splinecode" />
        </div>
      </div>
      <p className="text-[16px] font-medium mt-8 mb-4">Interactive Spheres</p>
      <div className="shadow-lg rounded-lg">
        <Spline scene="https://prod.spline.design/tlPXuUkYtzceRU5n/scene.splinecode" />
      </div>
    </div>
  );
}
