"use client";

import Image from "next/image";
import Heading from "./sub/Heading";

import { arrowLeftIcon, experienceData } from "@/assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div id="experience" className="relative py-20">
      <Heading text="Experience & Education" />
      <Image
        src="/education.png"
        alt="Experience & Education"
        width={400}
        height={400}
        className="absolute hidden lg:block -top-4 right-0 opacity-70"
      />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-20 lg:gap-y-10 py-10"
      >
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`"w-full min-w-[300px] sm:w-[480px] xl:w-[600px] px-0 sm:px-12 relative ${
              index % 2 === 0
                ? "left-0 lg:-left-60 xl:-left-[300px] "
                : "left-0 lg:left-60 xl:left-[300px] "
            }"`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide"
            >
              <h1 className="text-lg sm:text-xl font-light text-gray-700">
                {item.title}
              </h1>
              <p className="text-gray-800">
                <span className="block font-light">Education</span>
                <span className="block pl-2 font-extralight">
                  {item.education}
                </span>
              </p>
              <div className="text-gray-800">
                <span className="font-light">Experience</span>
                <ul className="pl-2">
                  {item.experience.map((experience, index) => (
                    <li key={index} className="my-1 font-extralight">
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute hidden lg:block top-1/2 text-red-300 -translate-y-1/2 ${
                  index % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`w-14 absolute hidden lg:grid top-1/2 border border-gray-800 rounded-full aspect-square place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                index % 2 === 0
                  ? "left-1/2 lg:left-full -translate-x-1/2"
                  : "right-1/2 lg:right-full translate-x-1/2"
              }`}
            >
              {date - experienceData.length - index + 1}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full -left-60 lg:left-1/2 rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
