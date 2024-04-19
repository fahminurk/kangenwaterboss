import { kangen } from "@/constants";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Kangen_water");
  const keys = ["hydrogen", "antioxidant", "alkaline"] as const;
  return (
    <div className=" flex flex-col gap-5 pb-10">
      <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-blue-900 to-white p-5">
        <div className="flex flex-col items-center gap-5 rounded-xl p-4 md:p-10 bg-white md:bg-gradient-to-b">
          <p className="text-center font-bold text-2xl md:text-6xl text-blue-900 md:text-white">
            {t("title")}
          </p>
          <p className="text-justify font-light max-w-[600px] md:text-white">
            {t("desc")}
          </p>
        </div>
      </div>
      <div className="container flex flex-col gap-5">
        <div className=" flex flex-col md:grid grid-cols-1 gap-5 justify-center items-center md:grid-cols-3">
          <p className="text-justify font-light p-5 rounded-xl bg-blue-900 text-white">
            {t("batu1")}
          </p>
          <img src="/what_is_kangen_stones.jpg" alt="" />
          <div className="flex flex-col gap-2 text-justify font-light p-5 rounded-xl bg-blue-900 text-white">
            <p>{t("batu2")}</p>
            <p>{t("batu3")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 [&>*:nth-child(even)]:flex-row-reverse">
          {keys.map((key) => (
            <div key={key} className="grid grid-cols-1 gap-10 lg:gap-0 lg:flex">
              <div className="lg:w-1/2 flex justify-center items-center lg:h-96 lg:p-5">
                <img src={t(`${key}.img`)} alt="" />
              </div>
              <div className="text-lg lg:w-1/2 flex justify-center items-center lg:px-20 lg:border">
                <div>
                  <p className="text-center text-2xl ">{t(`${key}.title`)}</p>
                  <p className="text-justify font-light text-sm lg:text-base ">
                    {t(`${key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-lg flex justify-center items-center lg:p-5">
            <div>
              <p className="text-center text-2xl">{t("negative.title")}</p>
              <p className="text-justify font-light text-sm lg:text-base ">
                {t("negative.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
