import React from "react";
import Footer from "../components/Footer";
import Products from "../components/Products";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div class="header-image"></div>
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Home;
