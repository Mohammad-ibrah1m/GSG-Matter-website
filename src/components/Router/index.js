import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductsListPage from '../../Views/ProductsListPage';
import HomePage from '../../Views/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={'productspage'} element={<ProductsListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
