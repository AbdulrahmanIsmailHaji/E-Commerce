import React from "react";
import style from "./Breadcrum.module.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = ({ product }) => {
  return (
    <div className={style.breadcrum}>
      Home <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" />
      {product.categoray}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
