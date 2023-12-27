"use client";

import React from "react";
import "../../globals.css";
import { CMImage } from "@/app/components/CMImage";
import { BackButton } from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SoundContent() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col w-full px-48">
        <div className="py-12 bg-no-repeat bg-cover rounded-b-lg px-8">
          <div className="flex justify-between w-full">
            <div className="flex gap-4 items-center">
              <BackButton onClick={() => router.push("/career")} />
              <p className="text-[32px] font-semibold">Sound.xyz</p>
            </div>
            <div className="flex">
              <a
                className="rounded-[90px] bg-[#232323] px-4 items-center text-[18px] cursor-pointer flex gap-2 items-center justify-center text-white"
                href="https://sound.xyz"
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
          <div className="mt-8 flex justify-between w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">IN SHORT</p>
              <p className="text-[14px] text-gray-600 w-[400px]">
                I joined Sound.xyz as the company&apos;s 6th employee and 4th
                Software Engineer. I helped the company scale to 20 employees
                within a year and a half and worked on multiple projects
                throughout my course there.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">ROLE</p>
              <p className="text-[14px] text-gray-600">Software Engineer</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">TOOLS</p>
              <p className="text-[14px] text-gray-600">React</p>
              <p className="text-[14px] text-gray-600">HTML/CSS</p>
              <p className="text-[14px] text-gray-600">GraphQL</p>
              <p className="text-[14px] text-gray-600">Figma</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">TIMELINE</p>
              <p className="text-[14px] text-gray-600">Feb 2022 - Oct 2023</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 mb-8">
          <p className="text-[32px] font-semibold">FEATURED WORK</p>
          <p className="text-[26px] font-medium mt-6 md:mt-8 mb-2">
            Left Navigation
          </p>
          <div className="flex gap-24">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold mt-2">IN SHORT</p>
              <p className="text-[14px]">
                As the Sound.xyz website continued to scale, it became more
                difficult to easily navigate all of its pages. In order to
                provide a more seamless way to navigate the app, as well as
                immediately make users aware of the apps most prominent and
                exciting features, I worked with the teams designers and
                engineers on developing the left navigation bar.
              </p>
              <p className="text-[14px] mt-4">
                The navigation bar&apos;s top section displays links to the
                app&apos;s homepage, explore pages, feed, and charts. The middle
                section displays links to the app&apos;s upcoming drops, and an
                authenticated user&apos;s song collection and liked songs.
                Lastly, if a user is authenticated and has created playlists,
                the navigation bar shows a scrolling list of all playlists
                created.
              </p>
            </div>
            <div className="justify-center flex mt-6">
              <CMImage
                src="/static/images/left-nav.png"
                alt="left nav"
                width={800}
                height={200}
              />
            </div>
          </div>
          <p className="text-[22px] font-medium mt-8 mb-2">Explore</p>
          <div className="flex gap-24">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold mt-2">IN SHORT</p>
              <p className="text-[14px]">
                As the Sound.xyz website continued to scale, it became more
                difficult to easily navigate all of its pages. In order to
                provide a more seamless way to navigate the app, as well as
                immediately make users aware of the apps most prominent and
                exciting features, I worked with the teams designers and
                engineers on developing the left navigation bar.
              </p>
              <p className="text-[14px] mt-4">
                The navigation bar&apos;s top section displays links to the
                app&apos;s homepage, explore pages, feed, and charts. The middle
                section displays links to the app&apos;s upcoming drops, and an
                authenticated user&apos;s song collection and liked songs.
                Lastly, if a user is authenticated and has created playlists,
                the navigation bar shows a scrolling list of all playlists
                created.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[12px] mb-1 justify-center flex">
                  Explore Dashboard
                </p>
                <div className="justify-center flex">
                  <CMImage
                    src="/static/images/explore.png"
                    alt="left nav"
                    width={800}
                    height={200}
                  />
                </div>
              </div>
              <div>
                <p className="text-[12px] mb-1 justify-center flex">
                  Explore Sounds
                </p>
                <div className="justify-center flex">
                  <CMImage
                    src="/static/images/explore-sounds.png"
                    alt="left nav"
                    width={800}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[22px] font-medium mt-8 mb-2">
            Golden Egg Animation
          </p>
          <div className="flex gap-24">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold mt-2">IN SHORT</p>
              <p className="text-[14px] ">
                Each drop of Sound.xyz had one NFT that was randomly selected as
                the &ldquo;Golden Egg&ldquo; NFT. Artists were able to upload
                unique cover art for their Golden Egg NFT. To showcase the both
                the regular cover art and Golden Egg cover art in a creative
                way, I implemented an animation that allowed users to toggle
                between the two.
              </p>
            </div>
            <div className="justify-center flex">
              <div className="border-solid border-[8px] border-gray-900 rounded-lg w-[800px]">
                <video controls autoPlay loop muted width={800} height={200}>
                  <source
                    src="/static/images/golden-egg-animation.mov"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
