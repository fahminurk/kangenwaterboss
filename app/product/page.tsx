import { product } from "@/constants";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatToIDR } from "@/lib/utils";
import Link from "next/link";

const page = () => {
  return (
    <div className="container my-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((item, i) => (
          <Link href={`/product/${item.name.replaceAll(" ", "-")}`} key={i}>
            <Card>
              <CardContent className="p-0">
                <img src={item.img} alt="" />
              </CardContent>
              <CardFooter className="p-1">
                <div className="flex flex-col flex-1">
                  <p className="border-b py-1">{item.name}</p>
                  <p className="text-xs py-1">{formatToIDR(item.price)}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
