"use client";

import Image from "next/image";
import Heading from "./sub/Heading";

import { skillsData } from "@/assets";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
      <Heading text="Skills" />
      <div className="w-full flex justify-between flex-wrap gap-x-4 gap-y-6 lg:gap-y-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-2 lg:px-5 py-2"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={100}
              height={100}
              className="h-auto w-10"
            />
            <p className="text-sm text-gray-600">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
