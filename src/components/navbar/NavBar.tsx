import { FC } from "react";
import { NavLink } from "./NavLink";

export const Navbar: FC = () => {
  const isNarrowScreen = window.matchMedia("(max-width: 500px)").matches;

  return (
    <nav className="flex items-center h-[100px] md:h-auto lg:py-[40px]">
      <div className=" min-w-fit pl-8">
        <img
          alt="logo"
          src="../../assets/shared/logo.svg"
          className="w-[48px] h-[48px]"
        />
      </div>
      <div className="relative w-2/3">
        <hr className="absolute opacity-[0.3] right-[-40px] w-full z-10" />
      </div>
      <ul className="flex items-center justify-center h-[96px] px-[50px] gap-x-[50px] ml-auto backdrop-blur-xl text-white">
        <NavLink number={"00"} text={"Home"} />
        <NavLink number={"01"} text={"Destinations"} />
        <NavLink number={"02"} text={"Crew"} />
        <NavLink number={"03"} text={"Technology"} />
      </ul>
    </nav>
  );
};
