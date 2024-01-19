"use client";

import { useState } from "react";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export default function Destinations() {
  const [selectedPage, setSelectedPage] = useState<string>("destinations");

  return <main></main>;
}
