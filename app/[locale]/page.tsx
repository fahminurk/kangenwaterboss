import ProductSection from "@/components/ProductSection";
import CountSection from "@/components/countSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const keys = ["wqa", "ms", "dnv"] as const;

  return (
    <div className="flex flex-col gap-10 pb-5">
      <div className="relative">
        <img
          src="/1.jpg"
          alt=""
          className="w-full h-96 sm:h-[450px] lg:h-auto object-cover grayscale"
        />
        <div className="absolute flex justify-center items-center top-0 w-full h-full">
          <div className="text-center p-5 rounded-lg">
            <p className="font-bold text-4xl sm:text-7xl bg-gradient-to-b from-blue-300 via-blue-500 to-blue-900 text-transparent bg-clip-text">
              KANGEN WATER
            </p>
            <p className="text-center tracking-widest px-2 font-bold text-white bg-blue-900">
              Change your water, change your life
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col container gap-10">
        <div className="flex flex-col gap-4 border">
          <p className="text-center font-bold text-2xl md:text-4xl p-5 bg-blue-900 text-white">
            {t("certified")}
          </p>
          <div className="md:[&>*:nth-child(even)]:flex-row-reverse md:[&>*:nth-child(even)]:bg-blue-900 md:[&>*:nth-child(even)]:text-white flex flex-col gap-4">
            {keys.map((key) => (
              <div
                key={key}
                className="flex p-4 flex-col-reverse md:flex-row items-center justify-around gap-5"
              >
                <div className="max-w-[600px] h-max">
                  <p className="font-bold text-2xl text-center underline">
                    {t(`${key}.title`)}
                  </p>
                  <p className="text-justify">{t(`${key}.desc`)}</p>
                </div>
                <img src={t(`${key}.img`)} alt="" className="h-80" />
              </div>
            ))}
          </div>
        </div>
        <CountSection />
        <ProductSection />
      </div>
    </div>
  );
}
