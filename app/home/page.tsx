"use client";

import "../globals.css";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Career } from "../Career";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { AboutPage } from "../AboutPage";
import BottomNav from "../BottomNav";
import Image from "next/image";
import { useModeStore } from "../store";

export default function Landing() {
  const ref = useRef<null | HTMLDivElement>(null);

  const [tab, setTab] = useState<string>("career");

  const state = useModeStore()

  const isDarkMode = state.mode === 1


  const toggleMode = () => {
    state.toggleMode(state);
    const element = document.body;

    element.classList.toggle("dark-mode");
  };

  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full flex-col">
      <div className="flex flex-col justify-center md:w-[900px] text-center">
        {/* <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" onChange={() => toggleMode()} />
              <span className="slider round"></span>
            </label>
        </div> */}
          {/* <div className='flex flex-col group'>
            <div className="group bg-[#dfa5a4] w-[54px] h-[54px] md:w-[70px] md:h-[70px] absolute right-[100px] md:right-[196px] top-[24px] flex items-center justify-center rounded-[90px] shadow-lg cursor-pointer active:w-[73px] active:h-[73px] active-shadow-[150px] active:bg-[#d17c7b]">
              <div className='hidden md:flex'>
                <Image
                  src="/static/images/diagonal_arrow.png"
                  alt="arrow"
                  width={30}
                  height={30}
                />
              </div>
              <div className='flex md:hidden'>
                <Image
                  src="/static/images/diagonal_arrow.png"
                  alt="arrow"
                  width={22}
                  height={22}
                />
              </div>
              <div className='bg-[#dfa5a4] bg-opacity-50 h-[240px] md:h-[250px] w-[54px] md:w-[70px] rounded-[90px] absolute top-0 invisible group-hover:visible shadow-lg'>
                <div className='mt-[74px] md:mt-[85px] flex flex-col gap-4 items-center'>
                  <a href='https://www.linkedin.com/in/camilla-moraes-044266103/' target='_blank'>
                    <Image src='/static/images/linkedin-icon.png' alt='linkedin' width={24} height={24} />
                  </a>
                  <a href='https://github.com/moraesc' target='_blank'>
                    <Image src='/static/images/github-icon.png' alt='github' width={24} height={24} />
                  </a>
                  <a href='https://twitter.com/home' target='_blank'>
                    <Image src='/static/images/x-icon.png' alt='x' width={24} height={24} />
                  </a>
                  <a href='mailto:cmoraes1955@gmail.com' target='_blank'>
                    <Image src='/static/images/email-icon.png' alt='email' width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <h1 className="text-[38px] md:text-[62px] lg:text-[88px] font-medium justify-center margin-auto cursor-pointer active:text-[92px] shimmer">
            CAMILLA MORAES
          </h1>
        <p className="text-[18px] md:text-[24px] lg:text-[40px] font-medium align-center">
          <span className="flex items-center gap-4 margin-auto inline no-break whitespace">
            A frontend developer{" "}
              <div
                className={clsx(
                  "spin-icon bg-[#232323] rounded-[100px] w-[24px] h-[24px] md:w-[45px] md:h-[45px] flex items-center justify-center inline cursor-pointer group hidden md:flex",
                  isDarkMode && "bg-white"
                )}
              >
                <Image
                  src="/static/images/icon.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            focused on building
          </span>{" "}
          beautiful interfaces with seamless user experiences
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row mt-[500px] h-[850px] gap-8 md:gap-24 lg:gap-[240px] hidden"
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
      <div className="flex margin-auto absolute bottom-16 justify-center w-full">
        <BottomNav />
      </div>
    </div>
  );
}
