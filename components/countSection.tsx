"use client";
import { counts } from "@/constants";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountSection = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      setCounterOn(true);
    } else {
      setCounterOn(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {counts.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-5 justify-center items-center p-10 text-center text-white rounded-md bg-gradient-to-b from-white via-blue-500 to-blue-800"
        >
          <div className="flex items-center gap-2 ">
            {item.count1 > 0 && (
              <>
                <p className="font-bold text-4xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={item.count1}
                      duration={2}
                      delay={0}
                    />
                  )}
                </p>
                <p>-</p>
              </>
            )}
            <p className="font-bold text-4xl">
              {counterOn && (
                <CountUp start={0} end={item.count2} duration={2} delay={0} />
              )}
            </p>
            <p>{item.title}</p>
          </div>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CountSection;
