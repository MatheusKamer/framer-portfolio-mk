/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import { heroIcons } from "@/assets";

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center">
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
          </div>
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
