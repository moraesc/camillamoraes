"use client";

import { useRouter } from "next/navigation";
import "./globals.css";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Career } from "./Career";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { AboutPage } from "./AboutPage";
import { Footer } from "./Footer";

export default function Landing() {
  const router = useRouter();
  const ref = useRef(null);

  const [tab, setTab] = useState<string>("career");

  return (
    <div className="relative px-6 md:px-[15%] mt-24 md:mt-[200px]">
      <div>
        <p className="text-[26px] md:text-[40px] font-medium w-[250px] md:w-[450px] text-blue">
          Hi, I&apos;m Camilla Moraes and I&apos;m a Software Engineer.
        </p>
        <div className="w-[150px] md:w-[200px] h-[1px] bg-black mt-6"></div>
        <p className="text-[18px] md:text-[20px] mt-6 w-full md:w-[600px] leading-16">
          <span className="font-medium text-black">Camilla Moraes</span>{" "}
          <span className="text-gray-500 font-light">
            -- A frontend developer focused on building beautiful interfaces
            with seamless user experiences. Over the past few years I&apos;ve
            specifialized in developing first class experiences for enterprise
            companies and start ups.
          </span>
        </p>
        <p className="text-[18px] md:text-[20px] mt-6 md:w-[600px] leading-16 text-gray-500 font-light">
          Currently working at Sound.xyz.
        </p>
        <p
          className="text-[18px] md:text-[20px] mt-16 md:w-[600px] cursor-pointer"
          onClick={() => {
            ref.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-medium text-black shimmer">
            Learn more about my work
          </span>
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row mt-[500px] h-[850px] gap-8 md:gap-24 lg:gap-[240px]"
        ref={ref}
      >
        <div className="flex flex-row md:flex-col items-start justify-between md:justify-normal md:gap-2">
          <button
            onClick={() => {
              setTab("career");
            }}
            className={clsx(
              "text-[22px] md:text-[28px] text-gray-400 hover:text-gray-900",
              tab === "career" && "font-medium text-gray-900"
            )}
          >
            Career
          </button>
          <button
            onClick={() => {
              setTab("projects");
            }}
            className={clsx(
              "text-[22px] md:text-[28px] text-gray-400 hover:text-gray-900",
              tab === "projects" && "font-medium text-gray-900"
            )}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setTab("skills");
            }}
            className={clsx(
              "text-[22px] md:text-[28px] text-gray-400 hover:text-gray-900",
              tab === "skills" && "font-medium text-gray-900"
            )}
          >
            Skills
          </button>
          <button
            onClick={() => {
              setTab("about");
            }}
            className={clsx(
              "text-[22px] md:text-[28px] text-gray-400 hover:text-gray-900",
              tab === "about" && "font-medium text-gray-900"
            )}
          >
            About
          </button>
        </div>
        <div>
          {tab === "career" && <Career />}
          {tab === "projects" && <Projects />}
          {tab === "skills" && <Skills />}
          {tab === "about" && <AboutPage />}
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
