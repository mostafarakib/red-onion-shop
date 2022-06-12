import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { clearCart, removeFromDb } from "../../utilities/fakedb";
import CartFoods from "../CartFoods/CartFoods";
import "./Cart.css";

const Cart = () => {
  const [customerArea, setCustomerArea] = useState("");
  const [customerHouse, setCustomerHouse] = useState("");
  const [cart, setCart] = useCart();

  let subTotal = 0;
  for (const food of cart) {
    subTotal = subTotal + food.price * food.quantity;
  }
  let tax = subTotal * 0.1;
  const shipping = !cart ? 2 : 0;
  let total = subTotal + tax + shipping;
  const saveAndContinueHandler = (event) => {
    event.preventDefault();
  };

  const placeOrderHandler = () => {
    clearCart();
  };

  const customerAreaHandler = (event) => {
    setCustomerArea(event.target.value);
  };
  const customerHouseHandler = (event) => {
    setCustomerHouse(event.target.value);
  };

  const orderCancelHandler = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    removeFromDb(id);
  };
  return (
    <Container className="cart-container p-5">
      <div>
        <form className="cart__form">
          <h4>Fill up the form</h4>
          <hr />
          <select>
            <option>Deliver to door</option>
            <option>Deliver to nearest pickup point</option>
          </select>
          <input type="text" placeholder="Your name" />
          <input
            onBlur={customerAreaHandler}
            type="text"
            placeholder="Your area"
          />
          <input
            onBlur={customerHouseHandler}
            type="text"
            placeholder="Your house number"
          />
          <input type="text" placeholder="Add delivery instruction" />
          <button
            type="submit"
            className="btn-optional"
            onClick={saveAndContinueHandler}
          >
            Save & Continue
          </button>
        </form>
      </div>
      <div>
        <div className="cart__product-container">
          {customerArea && customerHouse && (
            <div className="d-flex flex-column">
              <span>
                To <span className="cart__product-bold">{customerArea}</span>
              </span>
              <span>{customerHouse}</span>
              <span>arriving in 20-30 minutes</span>
            </div>
          )}
          <div className="mt-3">
            {cart.map((pd) => (
              <CartFoods
                orderCancelHandler={orderCancelHandler}
                product={pd}
                key={pd.id}
              ></CartFoods>
            ))}
          </div>
          <div className="cart-pricelist">
            <div>
              <span>Subtotal:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div>
              <span>Delivery fee:</span>
              <span>${shipping}</span>
            </div>
            <hr />
            <div>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/placeorder">
            <button onClick={placeOrderHandler} className="btn-optional mt-3">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
