/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Heading from "./sub/Heading";

import { starIcons, reviewsData, arrowIcons } from "@/assets";
import { animate, motion } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef<HTMLDivElement[]>([]);

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  };

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  };

  useEffect(() => {
    if (direction) {
      leftClickHandler();
    } else {
      rightClickHandler();
    }
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="reviews" className="my-20 ">
      <Heading text="Reviews" />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[280px] md:w-[95%] lg:w-[800px] h-400px sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden"
        >
          {reviewsData.map((review, index) => (
            <motion.div
              initial={{ x: "100%" }}
              ref={(element) => {
                if (element) slides.current.push(element);
              }}
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 lg:gap-y-7 border border-amber-500 bg-zinc-50 p-5 lg:p-14 rounded-xl"
            >
              <Image
                src={review.image}
                alt="Reviews Image"
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-xl md:text-2xl text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="text-sm md:text-lg text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars.reduce((sum, star) => sum + star, 0).toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, starIndex) => (
                    <span key={starIndex}>
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-y-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
          >
            {arrowIcons[0]}
          </button>
          <button
            className={`${
              index === reviewsData.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
