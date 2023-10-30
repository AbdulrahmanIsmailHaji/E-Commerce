import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Outlet, useParams } from "react-router-dom";
import Breadcrum from "../Component/Breadcrum/Breadcrum";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DesicriptionBox from "../Component/DesicriptionBox/DesicriptionBox";
import RelatedProducts from "../Component/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DesicriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
