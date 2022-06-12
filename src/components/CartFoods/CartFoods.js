import React from "react";
import "./CartFoods.css";

const CartFoods = (props) => {
  const { name, img, price, quantity } = props.product;

  return (
    <div className="cartfood-container">
      <img className="cartfood-img" src={img} alt="" />
      <div className="me-auto">
        <div className="cartfood-name">{name}</div>
        <span>Items ordered: {quantity}</span>
        <h5 className="cartfood-price">${(price * quantity).toFixed(2)}</h5>
      </div>
      <div>
        <button
          onClick={() => props.orderCancelHandler(props.product.id)}
          className="btn-optional"
        >
          &#10008;
        </button>
      </div>
    </div>
  );
};

export default CartFoods;
