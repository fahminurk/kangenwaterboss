import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Water_type");
  const type = ["strong", "kangen", "clean", "beauty", "acid"] as const;

  return (
    <div className="flex flex-col pb-5 lg:pb-0">
      <div className="flex flex-col gap-5 lg:gap-0 [&>*:nth-child(even)]:flex-row-reverse">
        {type.map((key) => (
          <div key={key} className="lg:flex ">
            <div className="lg:w-1/2 flex justify-center items-center bg-gradient-to-t lg:bg-gradient-to-l from-white via-blue-500 to-blue-900 text-white h-96 md:h-[500px] p-4">
              <p className="text-3xl font-bold text-center">
                {t(`${key}.title`)}
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:w-1/2 justify-center items-center px-5 bg-white">
              <p className=" text-justify text-sm md:text-base">
                {t(`${key}.desc`)}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div>
                    <p className="font-bold">
                      {t(`${key}.ket.${i + 1}.title`)}
                    </p>
                    <p className="text-sm pt-2 text-justify font-light">
                      {t(`${key}.ket.${i + 1}.desc`)}
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
