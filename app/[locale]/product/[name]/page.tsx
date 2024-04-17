"use client";
import { product } from "@/constants";
import { formatToIDR } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface Product {
  name: string;
  price: number;
  img: string;
  desc: string;
  plates: string;
  plateSize: string;
  negativeORP: string;
  pHSetting: string;
  generates: string;
  wattage: string;
  weight: string;
  dimensions: string;
  easeOfUse: string;
  languages: string;
  voiceGuidance: string;
  warranty: string;
}

const page = ({ params }: { params: { name: string } }) => {
  const { name } = params;

  const [item, setItem] = useState<Product>({} as Product);

  useEffect(() => {
    if (name) {
      const prdct = product.find(
        (item) => item.name === name.replaceAll("-", " ")
      );
      setItem(prdct as unknown as Product);
    }
  }, [name]);

  return (
    <div className="container flex flex-col gap-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={item.img}
          alt=""
          className="w-full object-cover md:sticky lg:relative lg:top-0 top-20"
        />
        <div className="flex flex-col gap-5 p-5">
          <p className="font-bold text-3xl md:text-5xl text-blue-900">
            {item.name}
          </p>
          <p className="text-2xl">{formatToIDR(item.price)}</p>
          <p className="text-justify font-light">{item.desc}</p>
          <div className="flex flex-col [&>*:nth-last-child(1)]:border-0 border [&>*:nth-child(even)]:bg-blue-900 [&>*:nth-child(even)]:text-white">
            {Object.entries(item).map(([key, value]) => {
              if (
                key !== "name" &&
                key !== "price" &&
                key !== "desc" &&
                key !== "img"
              ) {
                return (
                  <div
                    key={key}
                    className="grid grid-cols-3 p-2 border-b text-sm"
                  >
                    <p>{key.replaceAll("_", " ")}</p>
                    <p className="col-span-2 text-sm font-light text-justify">
                      {value}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
