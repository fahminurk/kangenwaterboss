import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  const t = useTranslations("Becomes_kangen");
  return (
    <div className="flex flex-col gap-5 container py-5">
      <p className="font-bold lg:p-10 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent text-4xl md:text-6xl text-center">
        {t("title")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <img src={t("step1.img")} alt="" />
          <p className="text-2xl md:text-4xl font-semibold">
            {t("step1.title")}
          </p>
          <p className="text-justify font-light">{t("step1.desc")}</p>
        </div>
        <div className="flex flex-col gap-5 text-justify font-light">
          <img src={t("step2.img")} alt="" />
          <p className="text-2xl md:text-4xl font-semibold">
            {t("step2.title")}
          </p>
          <p>{t("step2.desc1")}</p>
          <p>{t("step2.desc2")}</p>
          <p className="text-xs">{t("step2.desc3")}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
