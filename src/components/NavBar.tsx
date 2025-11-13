import Link from "next/link";

import { copyRightIcon, navbarData } from "@/assets";

interface iNavBar {
  id: string;
}

const NavBar = ({ id }: iNavBar) => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-100">
      <Link href="/#home">
        <span className="text-3xl font-semibold text-red-400">N</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-bold dark:text-white">
          Brown
        </span>
      </Link>
      <div className="flex flex-col gap-y-2 sm:gap-y-3">
        {navbarData.map((section, index) => (
          <Link
            key={index}
            href={`/#${section.id}`}
            className="group flex flex-col items-center gap-y-2"
          >
            <span
              className={`text-2xl group-hover:scale-125 transition-all ${
                section.id === id
                  ? "text-red-500 scale-105"
                  : "text-yellow-600 scale-100"
              }`}
            >
              {section.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${
                section.id === id && "translate-x-0 opacity-100"
              }`}
            >
              {section.name}
            </span>
          </Link>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon} 2021-{new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default NavBar;
