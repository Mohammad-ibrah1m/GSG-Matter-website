import React from 'react';
import ProductsList from '../components/ProductsList';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import AdsBar from '../components/AdsBar';
import Navbar from '../components/Navbar';

const ProductsListPage = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <Slider
        from="productListing"
        title="Apparels"
        headerClass="productListing"
        description={
          "White Gold began gaining popularity in the early 1900's as an alternative to platinum. "
        }
      />
      <ProductsList />
      <Footer />
    </>
  );
};

export default ProductsListPage;
