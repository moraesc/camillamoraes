"use client";

import React from "react";
import "../../globals.css";
import { CMImage } from "@/app/components/CMImage";
import { BackButton } from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AWSContent() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col w-full px-48 bg-[#232323]">
        <div className="py-12 bg-[#e7cfb0] bg-no-repeat bg-cover bg-[#e7cfb0] rounded-b-lg px-8">
          <div className="flex justify-between w-full">
            <div className="flex gap-4 items-center">
              <BackButton onClick={() => router.push("/career")} />
              <p className="text-[32px] font-semibold">Amazon Web Services</p>
            </div>
          </div>
          <div className="mt-8 flex justify-between w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">IN SHORT</p>
              <p className="text-[14px] text-gray-600 w-[400px]">
                I served as a Cloud Application Architect for Amazon Web
                Services for 2.5 years. I worked closely with customers such as
                Otsuka, Medtronic and Merck to build the frontend and AWS
                infrastructure for their respective web apps.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">ROLE</p>
              <p className="text-[14px] text-gray-600">
                Cloud Application Developer
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">TOOLS</p>
              <p className="text-[14px] text-gray-600">React</p>
              <p className="text-[14px] text-gray-600">HTML/CSS</p>
              <p className="text-[14px] text-gray-600">Lambda</p>
              <p className="text-[14px] text-gray-600">CloudFormation</p>
              <p className="text-[14px] text-gray-600">Amplify</p>
              <p className="text-[14px] text-gray-600">S3</p>
              <p className="text-[14px] text-gray-600">Route53</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">TIMELINE</p>
              <p className="text-[14px] text-gray-600">July 2019 - Feb 2021</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 text-white mb-8">
          <p className="text-[32px] font-semibold">FEATURED WORK</p>
          <p className="text-[26px] font-medium mt-6 md:mt-8 mb-2">Otsuka</p>
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
          </div>
          <p className="text-[22px] font-medium mt-8 mb-2">Medtronic</p>
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
          </div>
        </div>
      </div>
    </>
  );
}
