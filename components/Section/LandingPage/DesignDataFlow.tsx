import React from "react";
import { Button } from "~/components/ui/button";
import TextWrapper from "~/components/ui/TextWrapper";

const DesignDataFlow = () => {
  return (
    <div className="bg-gradient-to-b overflow-x-clip from-white to-[#D2DCFF]">
      <div className=" container py-24  ">
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
    </div>
  );
};

export default DesignDataFlow;
