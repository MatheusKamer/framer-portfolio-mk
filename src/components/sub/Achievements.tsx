import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import { AboutDataItem } from "@/types/aboutData.types";

interface IAchievementsProps {
  aboutData?: AboutDataItem;
}

const Achievements = ({ aboutData }: IAchievementsProps) => {
  const number = useMotionValue(0);
  const rounded = useTransform(number, (latest) => Math.floor(latest));

  return (
    <div className="flex items-end gap-x-3">
      <span className="text-2xl text-gray-300 lg:text-4xl">
        {aboutData?.icon}
      </span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-xl lg:text-2xl font-light text-yellow-500"
          onViewportEnter={() => {
            animate(number, aboutData?.amount ?? 0, {
              duration: 1.2,
              ease: "easeOut",
            });
          }}
          viewport={{ once: true }}
        >
          {rounded}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500">
          {aboutData?.title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
