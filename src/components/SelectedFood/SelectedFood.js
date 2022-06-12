import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./SelectedFood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const SelectedFood = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { name, img, price, description } = props.selectedfood;

  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-5 d-flex align-items-center">
        <div className="p-5">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex align-items-center">
            <h5>${price}</h5>
            <span
              onClick={decrementHandler}
              className="input-number-decrement ms-3"
            >
              –
            </span>
            <input
              className="input-number"
              type="text"
              value={quantity}
              min="1"
              max="10"
              onChange={quantityHandler}
            />
            <span onClick={incrementHandler} className="input-number-increment">
              +
            </span>
          </div>

          <button
            className="btn-optional mt-3 me-4"
            onClick={() => {
              props.addtocarthandler(props.selectedfood, quantity);
            }}
          >
            <FontAwesomeIcon icon={faCartArrowDown} /> Add
          </button>
        </div>
        <div>
          <img className="modal-img" src={img} alt="" />
        </div>
      </div>
      <Modal.Footer>
        <Button className="btn-optional" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectedFood;
