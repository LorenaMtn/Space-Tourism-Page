"use client";
import { useState } from "react";

import Home from "./home";
import styles from "./page.module.css";
import { Navbar } from "../components/navbar/NavBar";
import { bellefair } from "@/shared/constants";


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
