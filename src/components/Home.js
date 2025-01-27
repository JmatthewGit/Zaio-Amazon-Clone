import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61RLMmxo-qL._SX3000_.jpg"
          alt="amazon banner"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
