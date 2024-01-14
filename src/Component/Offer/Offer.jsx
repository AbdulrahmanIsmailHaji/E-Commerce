import React from "react";
import styles from "./Offer.module.css"; // Make sure to use the correct variable name
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles["offer-right"]}>
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p> {/* Typo fixed */}
        <button>Check Now</button>
      </div>
      <div className={styles["offer-left"]}>
        {" "}
        {/* Class name corrected */}
        <img src={exclusive_image} alt="Exclusive Offer" />{" "}
        {/* Alt attribute improved for accessibility */}
      </div>
    </div>
  );
};

export default Offer;
