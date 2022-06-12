import React, { useState } from "react";
import { Col } from "react-bootstrap";
import SelectedFood from "../SelectedFood/SelectedFood";
import "./Food.css";

const Food = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});

  const { name, img, price, description } = props.food;

  const viewProductHandler = (product) => {
    setSelectedFood(product);
  };

  return (
    <Col>
      <div className="card-container p-3">
        <img src={img} alt="food_image" />
        <h6 className="mt-3">{name}</h6>
        <span className="food_description-small">
          {description.slice(0, 71)}
        </span>
        <h5 className="text-center mt-1">${price}</h5>
        <button
          onClick={() => {
            viewProductHandler(props.food);
            setModalShow(true);
          }}
          className="btn-regular"
        >
          View Details
        </button>
      </div>
      <SelectedFood
        selectedfood={selectedFood}
        show={modalShow}
        onHide={() => setModalShow(false)}
        addtocarthandler={props.addtocarthandler}
      ></SelectedFood>
    </Col>
  );
};

export default Food;
