"use client";

import { ReactNode, useEffect, useState } from "react";
import { moonIcon, sunIcon } from "@/assets";
import { reactLocalStorage } from "reactjs-localstorage";
import { motion } from "framer-motion";

type iToggleProps = {
  children?: ReactNode;
};

const Toggle = ({ children }: iToggleProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    try {
      const theme = reactLocalStorage.get("darkTheme");
      if (theme === undefined || theme === null || theme === "") {
        if (typeof window !== "undefined" && window.matchMedia) {
          return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
      }
      return typeof theme === "string" ? JSON.parse(theme) : Boolean(theme);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    reactLocalStorage.set("darkTheme", darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <main>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div className="w-full xl:max-w-[1200px] mx-auto flex justify-center px-[90px] xl:px-0 pl-80px sm:pl-0 pr-5 sm:pr-0 overflow-hidden">
          <button
            className="fixed right-10 sm:right-14 top-10 text-yellow-600 hover:text-yellow-500"
            onClick={toggleTheme}
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {moonIcon}
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800"
            >
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
