"use client";

import Image from "next/image";
import Heading from "./sub/Heading";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="h-screen py-20 px-96">
      <Heading text="Get in touch" />
      <div className="w-full h-full my-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-x-0 lg:gap-x-20 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/contact.gif"
            alt="Contact Gif"
            width={400}
            height={400}
            unoptimized
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          action=""
          className="w-full sm:w-[400px] lg:w-[600px] flex flex-col gap-3"
        >
          <div className="w-full flex flex-col lg:flex-row gap-x-3 gap-y-3 lg:gap-y-0">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write me..."
          ></textarea>
          <input
            type="submit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm tracking-wider outline-none font-light text-white hover:bg-yellow-500 transition-colors cursor-pointer"
            value="Send message"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
