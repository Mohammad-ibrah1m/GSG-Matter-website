import React from 'react';
import ProductsList from '../components/ProductsList';
import HeaderBanner from '../components/HeaderBanner';
import Footer from '../components/Footer';
import AdsBar from '../components/AdsBar';
import Navbar from '../components/Navbar';

const Products = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <HeaderBanner
        title="Apparels"
        description={
          "White Gold began gaining popularity in the early 1900's as an alternative to platinum. "
        }
        image="assets/images/featured-4.png"
      />
      <ProductsList />
      <Footer />
    </>
  );
};

export default Products;
