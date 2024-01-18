import Link from "next/link";
import { Bellefair } from "next/font/google";

import { Navbar } from "../components/navbar/NavBar";
import styles from "./page.module.css";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${styles.container} ${bellefair.className} flex min-h-screen flex-col py-12 px-9`}
    >
      <Navbar />
      <div className="flex space-between min-h-fit mt-[108px] gap-24">
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
          className="self-end w-[274px] h-[274px] rounded-full bg-white text-3xl tracking-0.125"
          // onClick={() => console.log("too add destinations")}
        >
          Explore
        </button>
      </div>
    </main>
  );
}
