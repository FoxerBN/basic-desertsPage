import React, { useState, useEffect } from "react";
import { fetchDesserts } from "../functions/fetchProducts.js";
import { PiBasketDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import { handleHover, clearHover } from "../functions/hoverDetails.js";
import "./Products.css";

const Products = () => {
  const [desserts, setDesserts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const getDesserts = async () => {
      const data = await fetchDesserts();
      setDesserts(data);
    };
    getDesserts();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = desserts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(desserts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const addToBasket = (product) => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const existingProductIndex = storedProducts.findIndex(
      (item) => item.idMeal === product.idMeal
    );

    if (existingProductIndex !== -1) {
      storedProducts[existingProductIndex].quantity += 1;
    } else {
      storedProducts.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("products", JSON.stringify(storedProducts));
    console.log("Basket updated:", storedProducts);
  };

  return (
    <div id="products" className="products-wrapper">
      <div className="products-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="products-grid"
        >
          {currentItems.map((dessert) => (
            <motion.div
              key={dessert.idMeal}
              id={dessert.idMeal}
              className="product-card"
              onMouseEnter={(e) =>
                handleHover(dessert.idMeal, e.currentTarget, desserts)
              }
              onMouseLeave={clearHover}
            >
              <img
                src={dessert.strMealThumb}
                alt={dessert.strMeal}
                className="product-image"
              />
              <p className="product-name">{dessert.strMeal}</p>
              <p className="product-price">€{dessert.price}</p>
              <PiBasketDuotone
                onClick={(e) => addToBasket(dessert)}
                style={{
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "1.7rem",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Products;
