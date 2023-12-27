"use client";

import React from "react";
import "./globals.css";
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
        <video controls autoPlay loop muted width="100%" height={200}>
          <source src="/static/images/blob.mov" type="video/mp4"></source>
        </video>
      </div>
      <p className="text-[16px] font-medium mt-8 mb-1">Follow Effect</p>
      <div>
        <video controls autoPlay loop muted width="100%" height={200}>
          <source src="/static/images/follow.mov" type="video/mp4"></source>
        </video>
      </div>
      <p className="text-[14px] font-medium mt-8 mb-4">Morphing Sphere</p>
      <div className="shadow-lg rounded-lg">
        <video controls autoPlay loop muted width="100%" height={200}>
          <source
            src="/static/images/morphing-blob.mov"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div>
        <p className="text-[16px] font-medium mt-8 mb-1">
          Interactive Keyboard
        </p>
        <div className="shadow-lg rounded-lg">
          <video controls autoPlay loop muted width="100%" height={200}>
            <source src="/static/images/keyboard.mov" type="video/mp4"></source>
          </video>
        </div>
      </div>
      <p className="text-[16px] font-medium mt-8 mb-4">Interactive Spheres</p>
      <div className="shadow-lg rounded-lg">
        <video controls autoPlay loop muted width="100%" height={200}>
          <source src="/static/images/spheres.mov" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}
