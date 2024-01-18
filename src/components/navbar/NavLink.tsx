import Link from "next/link";
import { FC } from "react";

interface NavLinkProps {
  number: string;
  text: string;
}

export const NavLink: FC<NavLinkProps> = ({ number, text }) => {
  return (
    <li>
      <Link
        href={""}
        className="flex items-end h-full w-auto border-transparent border-2 hover:border-b-white/55"
      >
        <p className="text-[20px] tracking-[0.16875] ">
          <span className="font-bold pr-[12px]">{number}</span>
          {text}
        </p>
      </Link>
    </li>
  );
};
