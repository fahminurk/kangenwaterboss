"use client";
import { product } from "@/constants";
import React, { useEffect, useState } from "react";

export interface Product {
  name: string;
  price: number;
  img: string;
  desc: string;
  plates: string;
  plateSize: string;
}

const page = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const [item, setItem] = useState<Product>({} as Product);

  useEffect(() => {
    if (name) {
      const prdct = product.filter(
        (item) => item.name === name.replaceAll("-", " ")
      );
      setItem(prdct[0]);
    }
  }, [name]);

  return (
    <div className="container flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <img src={item.img} alt="" className="w-full object-cover col-span-2" />
      </div>
    </div>
  );
};

export default page;
