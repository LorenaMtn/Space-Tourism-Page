"use client";
import { useState } from "react";
import { Bellefair } from "next/font/google";

import Home from "./home";
import styles from "./page.module.css";
import { Navbar } from "../components/navbar/NavBar";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

const Page = ({ children }: any) => {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  console.log("selectedPage", selectedPage);

  return (
    <main
      className={`${styles.container} ${bellefair.className} flex justify-between min-h-screen flex-col ld:py-12 sm:py-0`}
    >
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      {children || <Home />}
    </main>
  );
};

export default Page;
