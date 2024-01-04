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
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { useModeStore } from "../store";

export default function Landing() {
  const ref = useRef<null | HTMLDivElement>(null);

  const [tab, setTab] = useState<string>("career");
  const [darkMode, setDarkMode] = useState(false);
  const [dropped, setIsDropped] = useState(false);

  const state = useModeStore()

  console.log('mode: ', state.mode)


  const toggleMode = () => {
    state.toggleMode(state);
    setDarkMode(!darkMode);
    const element = document.body;

    element.classList.toggle("dark-mode");
  };

  // function handleDragEnd(event) {
  //   if (event.over && event.over.id === "droppable") {
  //     setIsDropped(true);
  //   }
  // }

  const [activeProps, setActiveProps] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });

  const onStart = () => {
    setActiveProps({
      ...activeProps,
      activeDrags: activeProps.activeDrags++,
    });
  };

  const onStop = () => {
    setActiveProps({ ...activeProps, activeDrags: activeProps.activeDrags-- });
  };

  return (
    <div className="relative px-6 flex justify-center items-center h-[100vh] w-full flex-col">
      <div className="flex flex-col justify-center w-[900px] text-center">
        <div className="toggle-switch">
          <Draggable scale={1} onStart={onStart} onStop={onStop}>
            <label className="switch">
              <input type="checkbox" onChange={() => toggleMode()} />
              <span className="slider round"></span>
            </label>
          </Draggable>
        </div>
        {/* <Draggable
          defaultPosition={{ x: 0, y: 0 }}
          scale={1}
          onStart={onStart}
          onStop={onStop}
        > */}
          <div className='flex flex-col group'>
            <div className="group bg-[#dfa5a4] w-[70px] h-[70px] absolute right-[196px] top-[24px] flex items-center justify-center rounded-[90px] shadow-lg cursor-pointer active:w-[73px] active:h-[73px] active-shadow-[150px] active:bg-[#d17c7b]">
              <Image
                src="/static/images/diagonal_arrow.png"
                alt="arrow"
                width={30}
                height={30}
              />
              <div className='bg-[#dfa5a4] bg-opacity-50 h-[250px] w-[70px] rounded-[90px] absolute top-0 invisible group-hover:visible shadow-lg'>
                <div className='mt-[85px] flex flex-col gap-4 items-center'>
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
          </div>
          {/* <div className='bg-gray-500 h-[200px] w-[100px] rounded-[90px]'>Yo</div> */}
        {/* </Draggable> */}
        <Draggable
          defaultPosition={{ x: 0, y: 0 }}
          scale={1}
          onStart={onStart}
          onStop={onStop}
        >
          <p className="text-[26px] md:text-[88px] font-medium justify-center margin-auto cursor-pointer active:text-[92px] shimmer">
            CAMILLA MORAES
          </p>
        </Draggable>
        <p className="text-[26px] md:text-[40px] font-medium align-center inline">
          <div className="flex items-center gap-4">
            A frontend developer{" "}
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              scale={1}
              onStart={onStart}
              onStop={onStop}
            >
              <div
                className={clsx(
                  "spin-icon bg-[#232323] rounded-[100px] w-[45px] h-[45px] flex items-center justify-center inline cursor-pointer group",
                  darkMode && "bg-white"
                )}
              >
                <Image
                  src="/static/images/icon.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </Draggable>
            focused on building
          </div>{" "}
          beautiful interfaces with seamless user experiences
        </p>
        <p className="text-[18px] md:text-[20px] mt-6 w-full md:w-[600px] leading-16"></p>
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
