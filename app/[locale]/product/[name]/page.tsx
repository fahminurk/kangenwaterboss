"use client";
import { formatToIDR } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";
import { useRouter } from "@/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const page = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const keys = [
    "Plates",
    "Plate_size",
    "Negative_ORP",
    "pH_Setting",
    "Generates",
    "Wattage",
    "Weight",
    "Dimensions",
    "Ease_of_Use",
    "Languages",
    "Voice_Guidance",
    "Warranty",
  ] as const;
  const t = useTranslations("Products");
  const products = [
    "Leveluk-JR4",
    "Leveluk-Kangen-8",
    "Leveluk-SUPER-501",
    "Leveluk-SD-501",
    "Leveluk-SD-501-Platinum",
    "Anespa-DX",
  ];
  const router = useRouter();

  const handleChangeProduct = (productName: string) => {
    router.push(`/product/${productName}`);
  };

  return (
    <div className="container flex flex-col gap-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={t(`${name}.img`)}
          alt=""
          className="w-full object-cover md:sticky lg:relative lg:top-0 top-20"
        />
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-end gap-2">
            {products.indexOf(name) !== 0 && (
              <FaArrowLeft
                className="border p-2 text-blue-900 w-14 h-14 cursor-pointer rounded-full hover:bg-gray-300"
                onClick={() =>
                  handleChangeProduct(products[products.indexOf(name) - 1])
                }
              />
            )}
            {products.indexOf(name) !== products.length - 1 && (
              <FaArrowRight
                className="border p-2 text-blue-900 w-14 h-14 cursor-pointer rounded-full hover:bg-gray-300"
                onClick={() =>
                  handleChangeProduct(products[products.indexOf(name) + 1])
                }
              />
            )}
          </div>
          <p className="font-bold text-3xl md:text-5xl text-blue-900">
            {t(`${name}.name`)}
          </p>

          <p className="text-2xl">{formatToIDR(t(`${name}.price`))}</p>
          <p className="text-justify font-light">{t(`${name}.desc`)}</p>
          <div className="flex flex-col [&>*:nth-last-child(1)]:border-0 border [&>*:nth-child(even)]:bg-blue-900 [&>*:nth-child(even)]:text-white">
            {keys.map((key) => (
              <div className="grid grid-cols-3 p-2 border-b text-sm">
                <p>{t(`${name}.${key}.title`)}</p>

                <p className="col-span-2 text-sm font-light text-justify">
                  {t(`${name}.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
