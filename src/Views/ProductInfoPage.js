import React from 'react';
import AdsBar from '../components/AdsBar';
import Navbar from '../components/Navbar';
import ProductInfo from '../components/ProductInfo';
import { Image } from 'react-bootstrap';
import ProductInfoBanner from '../components/ProductInfoBanner';
import SectionHeader from '../components/SectionHeader';

const ProductInfoPage = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <ProductInfo />
      <ProductInfoBanner />
      <SectionHeader title="As seen on Instagram" />
    </>
  );
};

export default ProductInfoPage;
