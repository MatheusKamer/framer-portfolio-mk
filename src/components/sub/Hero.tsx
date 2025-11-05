"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseIsMoving, setMouseIsMoving] = useState(false);

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
    setMouseIsMoving(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const rotateY = useTransform(x, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(y, [0, innerHeight], [10, -50]);

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseIsMoving ? rotateX : 0,
              rotateY: mouseIsMoving ? rotateY : 0,
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
            <span className="absolute text-3xl font-semibold text-white">
              Hi
            </span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
            My name is Matheus Kamer &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I'm a software developer 🚀
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
        >
          Talk to me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
