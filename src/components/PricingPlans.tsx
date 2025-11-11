import Heading from "./sub/Heading";

import { checkIcon, pricingPlans } from "@/assets";
import { motion } from "framer-motion";

const PricingPlans = () => {
  return (
    <div className="py-20 px-96">
      <Heading text="Pricing Plans" />
      <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.2,
              scale: { duration: 0.15 },
            }}
            key={index}
            className={`w-[270px] flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 ${
              plan.title === "Premium"
                ? "sm:w-[320px] xl:w-[370px] bg-white"
                : "sm:w-[300px] xl:w-[350px] bg-zinc-50"
            }`}
          >
            <h1 className="text-lg lg:text-3xl font-light tracking-wide text-center">
              {plan.title}
            </h1>
            <span className="text-xl lg:text-2xl text-center">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-x-3">
                  <span
                    className={`text-2xl ${
                      plan.title === "Premium"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {checkIcon}
                  </span>
                  <li className="text-[15px] font-light tracking-wide">
                    {feature}
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-sm font-light text-center">
              <span className="font-semibold">Ideal for:</span>{" "}
              {plan.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
