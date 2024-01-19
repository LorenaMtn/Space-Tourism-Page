"use client";

import { useState } from "react";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/NavBar";
import { barlow, bellefair } from "@/shared/constants";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  console.log("selectedPage", selectedPage);

  return (
    <main
      className={`${styles.container} ${bellefair.className} flex justify-between min-h-screen flex-col ld:py-12 sm:py-0`}
    >
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />

      <div className="flex justify-between lg:flex-row sm:flex-col lg:p-[90px] sm:px-[20px] sm:py-[46px]">
        <div className="flex flex-col lg:basis-1/2 gap-6 lg:place-items-start sm:items-center text-pink-100 text-lg sm:max-w-[450px] sm:mx-auto lg:mx-[0px]">
          <p className={`${barlow} text-[28px] tracking-0.295 uppercase`}>
            So, you want to travel to
          </p>
          <p className="my-3 text-9xl text-white uppercase">Space</p>
          <p className={`${barlow}`}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button
          className="relative w-[274px] h-[274px] rounded-full items-end bg-white text-3xl tracking-0.125 transition-transform transform hover:scale-105 lg:mt-16 lg:mr-[0px] lg:mb-[0px] sm:mx-auto sm:mt-[150px] sm:mb-[66px] group"
          onClick={() => console.log("to add destinations")}
        >
          Explore
          <div className="hidden group-hover:flex  items-center justify-center w-[350px] h-[350px] absolute top-[-38px] left-[-38px] bg-white/10 rounded-full"></div>
        </button>
      </div>
    </main>
  );
}
