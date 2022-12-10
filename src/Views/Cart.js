import React from 'react';
import AdsBar from '../components/AdsBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItems from '../components/CartItems';
import SectionHeader from '../components/SectionHeader';

const Cart = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <SectionHeader title={'Cart items'} />
      <CartItems />
      <Footer />
    </>
  );
};

export default Cart;
