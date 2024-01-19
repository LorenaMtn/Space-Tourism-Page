"use client";

import React, { Dispatch, FC, SetStateAction, useState } from "react";

import { NavLink } from "./NavLink";
import { SelectedPage } from "@/shared/types";
import useWindowSize from "../../hooks/useWindowSize";

interface NavBarProps {
  setSelectedPage: Dispatch<SetStateAction<string>>;
  selectedPage: string;
}

const screenSizes = {
  mobile: 400,
  tablet: 800,
  desktop: 1000,
  largeDesktop: 1600,
};

export const Navbar: FC<NavBarProps> = ({ setSelectedPage, selectedPage }) => {
  const { width } = useWindowSize();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  console.log("isOpenModal", isOpenModal);
  return (
    <nav className="flex items-center h-[100px] sm:h-auto lg:py-[40px]">
      <div className="min-w-fit pl-8 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div>
        <hr className="absolute opacity-[0.3] right-[650px] sm:w-1/2 lg:w-1/3 z-10 sm:hidden lg:block" />
      </div>

      {width >= screenSizes.tablet ? (
        <ul className="relative flex items-center justify-center h-[96px] px-[50px] gap-x-[50px] ml-auto lg:brightness-110 sm:brightness-150 backdrop-blur-xl text-white">
          <NavLink
            isActive={selectedPage === SelectedPage.Home}
            link="/home"
            number={"00"}
            text={"Home"}
          />
          <NavLink
            isActive={selectedPage === SelectedPage.Destinations}
            link="/destinations"
            number={"01"}
            text={"Destinations"}
          />
          <NavLink
            isActive={selectedPage === SelectedPage.Crew}
            link="/crew"
            number={"02"}
            text={"Crew"}
          />
          <NavLink
            isActive={selectedPage === SelectedPage.Technology}
            link="/technology"
            number={"03"}
            text={"Technology"}
          />
        </ul>
      ) : (
        <button
          className={`cursor-pointer relative flex items-center justify-center h-[96px] px-[50px] gap-x-[50px] ml-auto text-white`}
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          <div
            className={`transition-transform transform ${
              isOpenModal ? "rotate-90" : ""
            }`}
          >
            {isOpenModal ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                  <g fill="#D0D6F9" fill-rule="evenodd">
                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                  </g>
                </svg>
              </>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            )}
          </div>
          {/* {isOpenModal && (
            <div className="flex  items-center mx-w-[300px] h-[550px] absolute top-[-38px] left-[-38px] pl-[10px] bg-white/10 brightness-150 backdrop-blur-l">
              <ul className="text-white">
                <NavLink
                  isActive={selectedPage === SelectedPage.Home}
                  link="/home"
                  number={"00"}
                  text={"Home"}
                />
                <NavLink
                  isActive={selectedPage === SelectedPage.Destinations}
                  link="/destinations"
                  number={"01"}
                  text={"Destinations"}
                />
                <NavLink
                  isActive={selectedPage === SelectedPage.Crew}
                  link="/app/crew"
                  number={"02"}
                  text={"Crew"}
                />
                <NavLink
                  isActive={selectedPage === SelectedPage.Technology}
                  link="/app/technology"
                  number={"03"}
                  text={"Technology"}
                />
              </ul>
            </div>
          )} */}
        </button>
      )}
    </nav>
  );
};
