"use client";

import Image from "next/image";
import React from "react";
import "./globals.css";
import { BackButton } from "./components/BackButton";
import { CMImage } from "./components/CMImage";

export default function SoundContent({
  onBackClick,
}: {
  onBackClick: () => void;
}) {
  return (
    <>
      <Image
        src="/static/images/gradient_2.jpg"
        alt="gradient"
        width={500}
        height={300}
      />
    </>
    // <div className="flex flex-col w-full rounded-lg rounded-lg px-4 py-4 shadow-lg pb-6 mb-20 md:pb-20 md:mb-24">
    //   <div className="flex gap-2 items-center mb-4 md:mb-6">
    //     <BackButton onClick={onBackClick} />
    //     <div className="flex justify-between w-full items-center pr-2">
    //       <p className="text-gray-900 text-[20px] font-medium">Sound.xyz</p>
    //       <a href="https://sound.xyz" target="_blank">
    //         <Image
    //           src="/static/images/website.png"
    //           alt="website"
    //           width={32}
    //           height={32}
    //         />
    //       </a>
    //     </div>
    //   </div>
    //   <p className="text-[14px] text-[#63635e]">
    //     In February 2022, I joined Sound.xyz as the company&apos;s 6th employee
    //     and 4th Software Engineer. I contributed to the company scaling to 20
    //     employees within a year and a half and worked on multiple projects
    //     throughout my course there. I worked on multiple projects. Here are some
    //     highlights:
    //   </p>
    //   <p className="text-[16px] font-medium mt-6 md:mt-8 mb-2">
    //     Left Navigation
    //   </p>
    //   <p className="text-[14px] text-[#63635e] mb-4">
    //     In collaboration with the team&apos;s Designers and Product Managers, I
    //     implemented a navigation bar to highlight the websites most important
    //     pages.
    //   </p>
    //   <div className="justify-center flex">
    //     <CMImage
    //       src="/static/images/left-nav.png"
    //       alt="left nav"
    //       width={500}
    //       height={200}
    //     />
    //   </div>
    //   <p className="text-[16px] font-medium mt-8 mb-2">Explore</p>
    //   <p className="text-[14px] text-[#63635e] mb-4">
    //     I built the Sound.xyz Explore pages and functionality to improve the
    //     website&ldquo;s search experience and create a seamless way to discover
    //     new artists and music.
    //   </p>
    //   <div className="flex flex-col gap-6">
    //     <div>
    //       <p className="text-[12px] text-gray-500 mb-1 justify-center flex">
    //         Explore Dashboard
    //       </p>
    //       <div className="justify-center flex">
    //         <CMImage
    //           src="/static/images/explore.png"
    //           alt="left nav"
    //           width={500}
    //           height={200}
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-[12px] text-gray-500 mb-1 justify-center flex">
    //         Explore Sounds
    //       </p>
    //       <div className="justify-center flex">
    //         <CMImage
    //           src="/static/images/explore-sounds.png"
    //           alt="left nav"
    //           width={500}
    //           height={200}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <p className="text-[16px] font-medium mt-8 mb-2">Golden Egg Animation</p>
    //   <p className="text-[14px] text-[#63635e] mb-4">
    //     Each drop of Sound.xyz had one NFT that was randomly selected as the
    //     &ldquo;Golden Egg&ldquo; NFT. Artists were able to upload unique cover
    //     art for their Golden Egg NFT. To showcase the both the regular cover art
    //     and Golden Egg cover art in a creative way, I implemented an animation
    //     that allowed users to toggle between the two.
    //   </p>
    //   <div className="justify-center flex">
    //     <div className="border-solid border-[16px] border-gray-900 rounded-lg w-[500px]">
    //       <video controls autoPlay loop muted width={500} height={200}>
    //         <source
    //           src="/static/images/golden-egg-animation.mov"
    //           type="video/mp4"
    //         ></source>
    //       </video>
    //     </div>
    //   </div>
    // </div>
  );
}
