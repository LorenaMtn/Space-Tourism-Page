import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
  number: string;
  text: string;
  isActive: boolean;
  link: string;
}

export const NavLink: FC<NavLinkProps> = ({ number, text, isActive, link }) => {
  const isActiveState = isActive ? "border-b-white" : "";
  return (
    <Link
      href={link}
      className={`flex h-full w-auto border-transparent border-2 hover:border-b-white/55 ${isActiveState}`}
    >
      <li className="flex m-auto">
        <p className="text-[16px] tracking-[0.16875] uppercase">
          <span className="font-bold pr-[12px] lg:inline md:hidden">
            {number}
          </span>
          {text}
        </p>
      </li>
    </Link>
  );
};
