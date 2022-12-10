import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from '../../Views/HomePage';
import Cart from '../../Views/Cart';
import ProductInfoPage from '../../Views/ProductInfoPage';
import Products from '../../Views/Products';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={'products'} element={<Products />} />
        <Route path={'cart'} element={<Cart />} />
        <Route path={'productinfopage'} element={<ProductInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
