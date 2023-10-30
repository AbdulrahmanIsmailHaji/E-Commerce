import style from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={style.productDisplay}>
      <div className={style["productDisplay-left"]}>
        <div className={style["productDisplay-img-list"]}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={style["productDisplay-img"]}>
          <img
            src={product.image}
            alt=""
            className={style["productDisplay-main-img"]}
          />
        </div>
      </div>
      <div className={style["productDisplay-right"]}>
        <h1>{product.name}</h1>
        <div className={style["productDisplay-right-star"]}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className={style["productDisplay-right-prices"]}>
          <div className={style["productDisplay-right-prices-old"]}>
            ${product.old_price}
          </div>
          <div className={style["productDisplay-right-prices-new"]}>
            ${product.new_price}
          </div>
        </div>
        <div className={style["productDisplay-right-desicreption"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
        <div className={style["productDisplay-right-size"]}>
          <h1>Select the Size</h1>
          <div className={style["productDisplay-right-sizes"]}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={style["productDisplay-right-category"]}>
          <span>category:</span> Women ,T-Shirt,Crop Top
        </p>
        <p className={style["productDisplay-right-category"]}>
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
