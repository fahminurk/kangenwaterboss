"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountSection = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const [ref, inView] = useInView();
  const t = useTranslations("Home");
  const keys = ["lifespan", "industry", "doctors", "countries"] as const;

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
      {keys.map((key) => (
        <div
          key={key}
          className="flex flex-col gap-5 justify-center items-center p-10 text-center text-white rounded-md bg-gradient-to-b from-white via-blue-500 to-blue-800"
        >
          <div className="flex items-center gap-2 ">
            {t(`${key}.count1`) !== "0" && (
              <>
                <p className="font-bold text-4xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={Number(t(`${key}.count1`))}
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
                <CountUp
                  start={0}
                  end={Number(t(`${key}.count2`))}
                  duration={2}
                  delay={0}
                />
              )}
            </p>
            <p>{t(`${key}.title`)}</p>
          </div>
          <p>{t(`${key}.desc`)}</p>
        </div>
      ))}
    </div>
  );
};

export default CountSection;
