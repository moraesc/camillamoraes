"use client";

import React from "react";
import "../../globals.css";
import { BackButton } from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WavesContent() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col w-full margin-auto items-center justify-center h-[100vh]">
        <div className="py-12 bg-no-repeat bg-cover rounded-b-lg px-8">
          <div className="flex justify-between w-full">
            <div className="flex gap-4 items-center relative right-8">
              <BackButton onClick={() => router.push("/projects")} />
              <p className="text-[32px] font-semibold">Waves</p>
            </div>
            <div className="flex">
              <a
                className="rounded-[90px] bg-[#232323] px-4 items-center text-[14px] cursor-pointer flex gap-2 items-center justify-center text-white"
                href="https://wavesproject.io"
                target="_blank"
              >
                LIVE PROJECT
                <div className="rounded-[100px] bg-white w-[24px] h-[24px] items-center flex justify-center">
                  <Image
                    src="/static/images/diagonal_arrow.png"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 flex gap-12 justify-between w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">In Short</p>
              <p className="text-[14px] text-[#63635e] w-[400px]">
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
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Tools</p>
              <p className="text-[14px] text-[#63635e]">Python</p>
              <p className="text-[14px] text-[#63635e]">Solidity</p>
              <p className="text-[14px] text-[#63635e]">ERC-721</p>
              <p className="text-[14px] text-[#63635e]">IPFS</p>
              <p className="text-[14px] text-[#63635e]">Piñata</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium">Timeline</p>
              <p className="text-[14px] text-[#63635e]">September 2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
