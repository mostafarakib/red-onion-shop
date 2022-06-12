import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import WhyChooseContent from "../WhyChooseContent/WhyChooseContent";

const WhyChooseUs = () => {
  const [whyChooseUsContent, setWhyChooseUsContent] = useState([]);
  useEffect(() => {
    fetch("choose.json")
      .then((res) => res.json())
      .then((data) => setWhyChooseUsContent(data));
  }, []);

  return (
    <Container className="mt-5">
      <h3>Why you should choose us!</h3>
      <p>
        Quality of Service, Food, Ambiance and Value of Money are the primary{" "}
        <br />
        elements for choosing us. All we want is your satisfaction.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4 w-100 mx-auto mt-4">
        {whyChooseUsContent.map((content) => (
          <WhyChooseContent
            content={content}
            key={content.id}
          ></WhyChooseContent>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
