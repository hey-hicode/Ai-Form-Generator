import React from "react";
import Database from "~/assets/Icons/Database";
import Network from "~/assets/Icons/Network";
import Wallet from "~/assets/Icons/Wallet";
import { Button } from "~/components/ui/button";
import ForecastBanner from "~/components/ui/ForecastaBanner";
// import ForecastBanner from "~/components/ui/ForecastaBanner";
import StrategyCard from "~/components/ui/StrategyCard";
import TextWrapper from "~/components/ui/TextWrapper";

const DesignDataFlow = () => {
  return (
    <div className="bg-gradient-to-b overflow-x-clip from-white to-[#D2DCFF]">
      <div className=" container pt-24   ">
        <div className="justify-center flex flex-col text-center items-center ">
          <TextWrapper text={"Our strategies"} />
          <div className="max-w-[580px]  flex gap-6 flex-col">
            <h1 className="text-[48px] font-bold text-center leading-[55px] text-[#1C1F25]">
              Improve your Continuous Design Data workflow
            </h1>
            <h4 className="text-base text-center mx-auto max-w-[460px]  leading-6 font-normal text-sass-brown_black ">
              Specify helps you gain control of your design system across teams
              and products.
            </h4>
            <div className="flex gap-3 mx-auto items-center">
              <Button className="bg-sass-blue rounded-md px-6 text-white">
                Get a demo
              </Button>
              <Button className="border border-blue-200 rounded-md px-6 text-sass-brown_black">
                Research
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-full py-5 mx-auto place-items-center place-content-center container gap-3">
        <StrategyCard
          title="AI-Driven Forecasts"
          icon={<Database />}
          description="Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends, and stay steps ahead of your competition. Make informed decisions backed by data-driven insights"
        />
        <StrategyCard
          title="Connect & Streamline"
          icon={<Network />}
          description="HNeuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the gaps in your data ecosystem, ensuring you have a holistic view of your operations"
        />
        <StrategyCard
          title="Instant Insights"
          icon={<Wallet />}
          description="In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you re always working with the most up-to-date information. React to changes as they happen and pivot your strategies instantly"
        />
      </div>

      <div className="mx-auto container pb-12  w-full">
      <ForecastBanner />

      </div>
      
    </div>
  );
};

export default DesignDataFlow;
