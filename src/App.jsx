import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OneProduct from './pages/NotFound';
import NotFound from './pages/OneProduct';
import Navigation from './components/Navigation'
import Basket from './pages/Basket';
const App = () => {
  return (
    <div className='page-container'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/pdoduct/:id" element={<OneProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
};

export default App;
