"use client";

import { useState } from "react";
import { Bellefair, Barlow_Condensed } from "next/font/google";

import styles from "./page.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import { Navbar } from "../components/navbar/NavBar";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  console.log("selectedPage", selectedPage);

  return (
    <main
      className={`${styles.container} ${bellefair.className} flex justify-between min-h-screen flex-col ld:py-12 sm:py-0`}
    >
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />

      <div className="flex justify-between lg:flex-row sm:flex-col p-[90px]">
        <div className="flex flex-col lg:basis-1/2 sm:basis-1/6 gap-6 lg:place-items-start sm:items-center text-pink-100 text-lg max-w-15">
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
          className="relative w-[274px] h-[274px] rounded-full items-end bg-white text-3xl tracking-0.125 transition-transform transform hover:scale-105 lg:mt-16 lg:mr-[0px] sm:mx-auto sm:mt-[150px] group"
          onClick={() => console.log("to add destinations")}
        >
          Explore
          <div className="hidden group-hover:flex  items-center justify-center w-[350px] h-[350px] absolute top-[-38px] left-[-38px] bg-white/10 rounded-full"></div>
        </button>
      </div>
    </main>
  );
}
