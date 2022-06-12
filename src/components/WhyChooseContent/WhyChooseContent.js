import React from "react";
import { Col } from "react-bootstrap";
import "./WhyChooseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WhyChooseContent = (props) => {
  const { img, tagline, description } = props.content;
  return (
    <Col>
      <div className="choose-container">
        <img className="choose-img" src={img} alt="" />
        <div className="choose-content-container">
          <h5>{tagline}</h5>
          <span>{description}</span>
          <h6 className="mt-1">
            See more <FontAwesomeIcon icon={faArrowRight} />
          </h6>
        </div>
      </div>
    </Col>
  );
};

export default WhyChooseContent;
