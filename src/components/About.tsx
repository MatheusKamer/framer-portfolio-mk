"use client";

import Link from "next/link";
import Image from "next/image";

import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";

import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      id="about"
    >
      <Heading text="About Me" />
      <div className="w-full flex items-center justify-center sm:justify-between">
        <Image
          src="/about-me.png"
          alt="About Image"
          width={400}
          height={400}
          className="hidden md:block md:w-[200px] lg:w-[300px]"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 hidden md:block">
            {arrowLeftIcon}
          </span>
          <p className="text-[14px] md:text-[16px] lg:text-lg font-light text-gray-700 first-letter:pl-3 lg">
            {aboutText}
          </p>
          <Link
            href="/Resume_Matheus_Kamer.pdf"
            download
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </Link>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((aboutDataItem, index) => (
          <Achievements key={index} aboutData={aboutDataItem} />
        ))}
      </div>
    </div>
  );
};

export default About;
