import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = (props) => {
  const [category, setCategory] = useState("breakfast");

  let selectedCategory = props.foods.filter(
    (food) => food.category === category
  );

  const breakfastHandler = () => {
    setCategory("breakfast");
  };
  const lunchHandler = () => {
    setCategory("lunch");
  };
  const dinnerHandler = () => {
    setCategory("dinner");
  };

  const addToCartHandler = (product, quantity) => {
    addToDb(product.id, quantity);
  };
  return (
    <div className="mt-5 text-center">
      <div className="text-center food-varities-container">
        <button className="btn-food-varities" onClick={breakfastHandler}>
          Breakfast
        </button>
        <button className="btn-food-varities" onClick={lunchHandler}>
          Lunch
        </button>
        <button className="btn-food-varities" onClick={dinnerHandler}>
          Dinner
        </button>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 w-75 mx-auto mt-4">
        {selectedCategory.map((food) => (
          <Food
            addtocarthandler={addToCartHandler}
            key={food.id}
            food={food}
          ></Food>
        ))}
      </Row>
      <div className="btn-checkout mt-5">
        <Link to="/cart">
          <button className="btn-optional">Checkout Your Foods</button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;
