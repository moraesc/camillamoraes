"use client";

import Image from "next/image";
import React from "react";
import "./globals.css";
import { BackButton } from "./components/BackButton";
import { CMImage } from "./components/CMImage";

export default function AIArtGalleryContent({
  onBackClick,
}: {
  onBackClick: () => void;
}) {
  return (
    <div className="flex flex-col w-full rounded-lg rounded-lg px-4 py-4 shadow-lg pb-6 mb-12 md:pb-12 md:mb-24">
      <div className="flex gap-2 items-center mb-8">
        <BackButton onClick={onBackClick} />
        <div className="flex justify-between w-full items-center pr-2">
          <p className="text-gray-900 text-[20px] font-medium">
            AI Art Gallery
          </p>
          <a href="https://aigalleryart.xyz" target="_blank">
            <Image
              src="/static/images/website.png"
              alt="website"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
      <p className="text-[14px] text-gray-600">
        In February 2023 I began creating art using a variety of AI tools, but
        found the most success with Midjourney and DALL•E. I created an
        Instagram account to share my work and after gaining to 600 followers
        within the first few months, expanded to TikTok by using AI video
        creation tools such as Kaiber AI. Recently, I built a website as another
        way to showcase the art.
      </p>
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex justify-center">
          <div className="border-solid border-[16px] border-gray-900 rounded-lg w-[500px]">
            <video controls autoPlay loop muted width={500} height={200}>
              <source src="/static/images/teaser.mov" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="flex justify-center">
          <CMImage
            src="/static/images/gallery.png"
            alt="left nav"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
