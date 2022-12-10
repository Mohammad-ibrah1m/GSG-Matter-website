import React from 'react';
import AdsBar from '../components/AdsBar';
import AsSeenOn from '../components/AsSeenOn';
import Navbar from '../components/Navbar';
import ProductInfo from '../components/ProductInfo';
import ProductInfoBanner from '../components/ProductInfoBanner';
import Footer from '../components/Footer';

const ProductInfoPage = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <ProductInfo />
      <ProductInfoBanner />
      <AsSeenOn />
      <Footer />
    </>
  );
};

export default ProductInfoPage;
