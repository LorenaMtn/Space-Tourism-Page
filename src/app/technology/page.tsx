"use client";

import { FC, useState } from "react";
import { Barlow_Condensed, Bellefair } from "next/font/google";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/NavBar";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

const Techonology: FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("technology");

  return (
    <main
      className={`${styles.container} ${bellefair.className} flex justify-between min-h-screen flex-col ld:py-12 sm:py-0`}
    >
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />

      <div
        className={` ${barlow.className} flex lg:flex-col sm:flex-col lg:p-[90px] sm:p-[20px]`}
      >
        <div className="flex gap-[12px] text-3xl text-pink-100 tracking-[0.285rem]">
          <p className="text-slate-600">03</p>
          <p>Space Launch</p>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Techonology;
