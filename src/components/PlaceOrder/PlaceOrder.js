import React from "react";
import { Link } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <div className="p-5">
      <h3 className="text-center mb-3">Order successful!</h3>
      <div className="placeholder_box-2">
        <img className="rider_img-1" src="images/Group 1151.png" alt="" />
        <div className="placeholder_box-2--inside">
          <h6>Your Location</h6>
          <span>107, Road no. 8</span>
        </div>
        <h4 className="mt-2">10:30</h4>
        <span>Estimated delivery time</span>
        <div className="placeholder_box-2--inside d-flex align-items-center">
          <img
            className="rider_img-2 me-3"
            src="images/Group 1152.png"
            alt=""
          />
          <div>
            <h6>John</h6>
            <span>Your rider</span>
          </div>
        </div>
        <button className="btn-optional mt-3 w-100">Contact</button>
      </div>
      <p className="text-center mt-3">
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default PlaceOrder;
