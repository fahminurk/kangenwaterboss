import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");
  const kangen = ["kangen", "made", "history"] as const;
  const certifications = ["iso", "wqa", "dsa", "bbb"] as const;

  return (
    <div className="flex flex-col gap-10 pb-5">
      <div className="flex flex-col  gap-5 lg:gap-0 [&>*:nth-child(even)]:flex-row-reverse">
        {kangen.map((key) => (
          <div key={key} className="lg:flex">
            <div className="lg:w-1/2 flex justify-center items-center bg-gradient-to-t lg:bg-gradient-to-l from-white via-blue-500 to-blue-900 h-96 p-4">
              <p className="text-3xl font-bold text-white">
                {t(`${key}.title`)}
              </p>
            </div>
            <div className="text-lg lg:w-1/2 flex justify-center items-center px-12 md:px-20 bg-white">
              <p className="text-justify text-sm md:text-base">
                {t(`${key}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-10 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex-col text-center md:text-start  h-max flex row-span-2 gap-2">
            <p className="text-blue-700 ">{t("Certifications.header")}</p>
            <p className="text-xl font-bold">{t("Certifications.title")}</p>
            <p className="text-sm font-light">{t("Certifications.desc")}</p>
          </div>
          {certifications.map((key) => (
            <div
              key={key}
              className="flex flex-col gap-2 items-center md:items-start"
            >
              <img src={t(`${key}.img`)} alt="" className="w-32" />
              <p className="font-bold">{t(`${key}.title`)}</p>
              <p className="font-light text-justify">{t(`${key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 bg-blue-900 rounded-lg text-white ">
          <div className="col-span-2 p-5 lg:border-r">
            <p className="text-justify">{t("executive")}</p>
            <div className="flex justify-end pt-5">
              <div className="flex flex-col items-center">
                <img src="/sign.png" alt="" className="invert" />
                <p className="text-sm">CEO Enagic International, Inc</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <p className="text-4xl font-bold">Executive Team</p>
            <div className="flex gap-3">
              <img src="/hironari.jpg" alt="" className="" />
              <div>
                <p className="font-bold">Hironari Ohshiro</p>
                <p className="font-light text-sm">
                  CEO Enagic International, Inc.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/yaeko.jpg" alt="" className="" />
              <div>
                <p className="font-bold">Yaeko Ohshiro</p>
                <p className="font-light text-sm">Enagic International</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
