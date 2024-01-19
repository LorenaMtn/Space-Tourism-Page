"use client";

import { FC, useState } from "react";

import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/NavBar";
import { barlow, bellefair } from "@/shared/constants";

const Destinations: FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("destinations");

  return (
    <main
      className={`${styles.container} ${bellefair.className} flex justify-between min-h-screen flex-col ld:py-12 sm:py-0`}
    >
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />

      <div
        className={` ${barlow.className} flex lg:flex-col sm:flex-col lg:p-[90px] sm:p-[20px]`}
      >
        <div className="flex gap-[12px] text-3xl text-pink-100 tracking-[0.285rem]">
          <p className="text-slate-600">01</p>
          <p>Pick ur destinations</p>
        </div>
        <div>
          <div>
            {/* <img
              src="/assets/destination/image-europa.png"
              alt="Example Image"
              className="w-1/3 h-1/3"
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destinations;