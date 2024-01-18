"use client";

import Link from "next/link";
import { Bellefair } from "next/font/google";
import { Navbar } from "../components/navbar/NavBar";
import styles from "./page.module.css";
import { useState } from "react";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  console.log("selectedPage", selectedPage);
  return (
    <main
      className={`${styles.container} ${bellefair.className} flex justify-between min-h-screen flex-col py-12`}
    >
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <div className="flex justify-between p-[90px]">
        <div className="flex flex-col basis-1/2 gap-6 align-left text-pink-100 text-lg max-w-15">
          <p className="text-3xl tracking-0.295 uppercase">
            So, you want to travel to
          </p>
          <p className="my-3 text-9xl text-white uppercase">Space</p>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button
          className="self-end relative w-[274px] h-[274px] rounded-full bg-white text-3xl tracking-0.125 transition-transform transform hover:scale-105 lg:mt-16 group"
          onClick={() => console.log("to add destinations")}
        >
          Explore
          <div className="hidden group-hover:flex items-center justify-center w-[350px] h-[350px] absolute top-[-38px] left-[-38px] bg-white/10 rounded-full">
            {/* Additional content or styles for hover state */}
          </div>
        </button>
      </div>
    </main>
  );
}
