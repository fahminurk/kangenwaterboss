import { typeWater } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 lg:gap-0 [&>*:nth-child(even)]:flex-row-reverse">
        {typeWater.map((item, index) => (
          <div key={item.title} className="lg:flex ">
            <div className="lg:w-1/2 flex justify-center items-center bg-gradient-to-t lg:bg-gradient-to-l from-white via-blue-500 to-blue-900 text-white h-[500px] p-4">
              <p className="text-3xl font-bold ">{item.title}</p>
            </div>
            <div className="flex flex-col gap-5 lg:w-1/2 justify-center items-center px-5 bg-white">
              <p className=" text-justify text-sm md:text-base">{item.desc}</p>
              <div className="grid grid-flow-col gap-5">
                {item.subs.map((sub, index) => (
                  <div>
                    <p className="font-bold border-b">{sub.title}</p>
                    <p className="text-sm pt-2 text-justify font-light">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
