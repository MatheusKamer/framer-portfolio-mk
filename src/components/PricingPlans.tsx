import Heading from "./sub/Heading";

import { checkIcon, pricingPlans } from "@/assets";

const PricingPlans = () => {
  return (
    <div className="py-20 px-96">
      <Heading text="Pricing Plans" />
      <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[270px] sm:w-[300px] xl:w-[350px] bg-zinc-50 flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600"
          >
            <h1 className="text-lg lg:text-3xl font-light tracking-wide text-center">
              {plan.title}
            </h1>
            <span className="text-xl lg:text-2xl text-center">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <span className="text-2xl text-yellow-500">{checkIcon}</span>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
