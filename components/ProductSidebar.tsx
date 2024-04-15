import { Product } from "@/app/product/[name]/page";
import React from "react";

const ProductSidebar: React.FC<{ item: Product }> = ({ item }) => {
  console.log(item);

  return <div>s</div>;
};

export default ProductSidebar;
