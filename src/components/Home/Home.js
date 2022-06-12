import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import Header from "../Header/Header";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [matchedFoods, setMatchedFoods] = useState([foods]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setMatchedFoods(data);
      });
  }, []);

  const searchHandler = (event) => {
    const searchText = event.target.value;
    const matchedProducts = foods?.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setMatchedFoods(matchedProducts);
  };
  const searchButtonHandler = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <Header
        searchButtonHandler={searchButtonHandler}
        searchHandler={searchHandler}
      ></Header>
      <Foods foods={matchedFoods}></Foods>
      <WhyChooseUs></WhyChooseUs>
    </React.Fragment>
  );
};

export default Home;
