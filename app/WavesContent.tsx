"use client";

import Image from "next/image";
import React from "react";
import "./globals.css";
import { BackButton } from "./components/BackButton";
import { CMImage } from "./components/CMImage";

export default function WavesContent({
  onBackClick,
}: {
  onBackClick: () => void;
}) {
  return (
    <div className="relative flex flex-col w-full rounded-lg rounded-lg px-4 py-4 shadow-lg pb-6 mb-20 md:pb-12 md:mb-24">
      <div className="flex gap-2 items-center mb-8">
        <BackButton onClick={onBackClick} />
        <p className="text-gray-900 text-[20px] font-medium">
          Waves NFT Collection
        </p>
      </div>
      <p className="text-[14px] ">
        Suhail Doshi launched his iconic{" "}
        <a
          href="https://tunesproject.org/"
          target="_blank"
          className="font-medium"
        >
          Tunes NFT collection
        </a>{" "}
        in August of 2021, which was a collection of 5000 imaginative song
        titles generated by AI. After seeing the creativity that project
        unleashed, I was inspired to create a derivative of it. I developed the
        Waves NFT collection which used Python to generate animated sound waves
        corresponding to each song title from Tunes.
        <br></br>
        <br></br>
        Here are some samples:
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-8 w-[450px]">
          <CMImage
            src="/static/images/waves1.GIF"
            alt="waves"
            width={220}
            height={350}
          />
          <CMImage
            src="/static/images/waves2.GIF"
            alt="waves"
            width={220}
            height={350}
          />
          <CMImage
            src="/static/images/waves3.GIF"
            alt="waves"
            width={220}
            height={350}
          />
          <CMImage
            src="/static/images/waves4.GIF"
            alt="waves"
            width={220}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
