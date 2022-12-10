import React from 'react';
import AdsBar from '../components/AdsBar';
import Navbar from '../components/Navbar';
import ProductInfo from '../components/ProductInfo';
import { Image } from 'react-bootstrap';
import ProductInfoBanner from '../components/ProductInfoBanner';

const ProductInfoPage = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <ProductInfo />
      <ProductInfoBanner />
    </>
  );
};

export default ProductInfoPage;
