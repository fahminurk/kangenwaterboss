import { product } from "@/constants";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/navigation";

const ProductSection = () => {
  const t = useTranslations("Home");
  const p = useTranslations("Products");
  const keys = [
    "Leveluk-JR4",
    "Leveluk-Kangen-8",
    "Leveluk-SUPER-501",
    "Leveluk-SD-501",
  ] as const;
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center font-bold text-4xl p-5">{t("products")}</p>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-between">
          {keys.map((item, i) => (
            <Link href={`/product/${item}`} key={p(`${item}.img`)} className="">
              <img src={p(`${item}.img`)} alt="" className="w-full" />
              <p className=" font-bold text-white p-1 text-center bg-blue-900 w-full sm:text-xs md:text-base">
                {p(`${item}.name`)}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href={"/product"}
          style={{ writingMode: "vertical-lr" }}
          className="hidden sm:block text-center p-2 font-bold border hover:bg-blue-900 hover:text-white transition-all hover:translate-x-2"
        >
          View more
        </Link>
        <Link
          href={"/product"}
          className=" sm:hidden text-center p-2 font-bold border hover:bg-blue-900 hover:text-white transition-all"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
