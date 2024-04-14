import { product } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center font-bold text-4xl p-5">OUR PRODUCTS</p>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        {product.map((item, i) => (
          <div key={item.name} className="">
            <img src={item.img} alt="" className="w-full" />
            <p className=" font-bold text-white p-1 text-center bg-blue-900 w-full">
              {item.name}
            </p>
          </div>
        ))}
        <Link
          href={"/product"}
          style={{ writingMode: "vertical-lr" }}
          className="hidden md:block text-center p-2 font-bold border hover:bg-blue-900 hover:text-white transition-all hover:translate-x-2"
        >
          View more
        </Link>
        <Link
          href={"/product"}
          className=" md:hidden text-center p-2 font-bold border hover:bg-blue-900 hover:text-white transition-all"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
