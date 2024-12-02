import React, { useState, useEffect } from 'react';
import { fetchDesserts } from '../functions/fetchProducts.js';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { handleHover, clearHover } from '../functions/hoverDetails.js';
import './Products.css';

const Products = () => {
  const [desserts, setDesserts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const getDesserts = async () => {
      const data = await fetchDesserts();
      setDesserts(data);
    };
    getDesserts();
  }, []);

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentItems = desserts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(desserts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div id='products' className="products-wrapper">
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
              onMouseEnter={(e) => handleHover(dessert.idMeal, e.currentTarget, desserts)} // Pass desserts as well
              onMouseLeave={clearHover}
            >
              <img src={dessert.strMealThumb} alt={dessert.strMeal} className="product-image" />
              <p className="product-name">{dessert.strMeal}</p>
              <p className="product-price">€{dessert.price}</p> {/* Display product price */}
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
