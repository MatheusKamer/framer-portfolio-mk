"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoad(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-linear-to-t from-yellow-50 to-red-50 z-101"
    >
      <Image
        src="spinner.gif"
        alt="Spinner gift"
        width={50}
        height={50}
        unoptimized
      />
    </motion.div>
  );
};

export default Load;
