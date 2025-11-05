import { AboutDataItem } from "@/types/aboutData.types";

interface IAchievementsProps {
  aboutData?: AboutDataItem;
}

const Achievements = ({ aboutData }: IAchievementsProps) => {
  return (
    <div className="flex items-end gap-x-3">
      <span className="text-2xl text-gray-300 lg:text-4xl">
        {aboutData?.icon}
      </span>
      <h1 className="flex flex-col gap-y-2">
        <span className="text-xl lg:text-2xl font-light text-yellow-500">
          {aboutData?.amount}
        </span>
        <span className="text-sm tracking-wide text-gray-500">
          {aboutData?.title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
