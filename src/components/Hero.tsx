"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";

import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [buttonHovered, setButtonHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };

  const handleMouseLeave = () => {
    x.set(innerWidth / 2);
    y.set(innerHeight / 2);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          >
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHovered ? 1 : 0,
                scale: buttonHovered ? 2 : 0,
                y: buttonHovered ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.3 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-xl sm:text-3xl font-bold tracking-wider text-gray-500">
            My name is Matheus Kamer &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I'm a software engineer 🚀
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-10 mt-8">
          {heroIcons.map((icon, index) => (
            <Link
              key={index}
              href="#"
              className="text-yellow-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
            >
              {icon}
            </Link>
          ))}
        </div>
        <Link
          href="#"
          target="_blank"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Talk to me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
