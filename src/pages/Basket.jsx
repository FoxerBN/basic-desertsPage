import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import './Basket.css';

const Basket = () => {
  const [basketProducts, setBasketProducts] = useState([]);

  // Load products from localStorage and ensure `quantity` exists
  useEffect(() => {
    const fetchBasket = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      const productsWithQuantity = storedProducts.map((product) => ({
        ...product,
        quantity: product.quantity || 1,
      }));
      setBasketProducts(productsWithQuantity);
    };

    fetchBasket();

    // Update on localStorage changes
    window.addEventListener('storage', fetchBasket);
    return () => window.removeEventListener('storage', fetchBasket);
  }, []);

  // Update product quantity
  const updateQuantity = (id, delta) => {
    const updatedProducts = basketProducts
      .map((product) =>
        product.idMeal === id
          ? { ...product, quantity: product.quantity + delta }
          : product
      )
      .filter((product) => product.quantity > 0); // Remove products with quantity 0

    setBasketProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Remove a product completely
  const removeProduct = (id) => {
    const updatedProducts = basketProducts.filter(
      (product) => product.idMeal !== id
    );
    setBasketProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <>
      <div className="basket-container">
        <div className="basket-image"></div>
        <div className="basket-content glass-effect">
          <h2>Your Basket</h2>
          {basketProducts.length > 0 ? (
            basketProducts.map((product) => (
              <div key={product.idMeal} className="basket-item">
                <p>{product.strMeal}</p>
                <p style={{fontSize:'smaller',opacity:'0.6'}}>{product.price} €</p>
                <div className="basket-controls">
                  <button onClick={() => updateQuantity(product.idMeal, -1)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => updateQuantity(product.idMeal, 1)}>+</button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeProduct(product.idMeal)}
                >
                  x
                </button>
              </div>
              
            ))
          ) : (
            <p style={{fontSize:'smaller',opacity:'0.6'}}>Your basket is empty.</p>
          )}
          <div style={{textAlign:'right',marginTop:'4px'}}>{
              basketProducts.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2)
            } €</div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Basket;
