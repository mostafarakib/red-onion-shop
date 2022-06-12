import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h2>Best food is always a better option than your partner</h2>

      <form onSubmit={props.searchButtonHandler} className="header__form mt-4">
        <input
          id="search-food"
          type="text"
          size="50"
          placeholder="Search food"
          onChange={props.searchHandler}
        />
        <button type="submit" className="btn-regular ml-n3 btn-search">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
