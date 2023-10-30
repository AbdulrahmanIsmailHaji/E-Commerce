import { useContext } from "react";
import style from "./CartItem.module.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { totalCartAmount, all_product, cartItem, removeCart } =
    useContext(ShopContext);

  const handleRemove = (id) => {
    removeCart(id);
  };

  return (
    <div className={style.cartItem}>
      <div className={style.cartItemFormatMain}>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItem[product.id] > 0) {
          return (
            <div key={product.id}>
              <div
                className={`${style.cartItemFormat} ${style.cartItemFormatMain}`}
                key={product.id}
              >
                <img
                  src={product.image}
                  className={style.cartIconProductIcon}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className={style.cartItemQuantity}>
                  {cartItem[product.id]}
                </button>
                <p>${product.new_price * cartItem[product.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => handleRemove(product.id)}
                  alt="Remove"
                  className={style.cartItemRemoveIcon}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={style.cartItemDown}>
        <div className={style.cartItemTotal}>
          <h1>Cart Total</h1>
          <div>
            <div className={style.cartItemTotalItem}>
              <p>SubTotal</p>
              <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className={style.cartItemTotalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={style.cartItemTotalItem}>
              <p>Total</p>
              <p>${totalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={style.cartItemPromoCode}>
          <p>If You Have A Promo Code, Enter It Here.</p>
          <div className={style.cartItemPromoBox}>
            <input type="text" placeholder="promo code" />
            <button>Submitt</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
