import React from 'react';
import AdsBar from '../components/AdsBar';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Featured from '../components/Featured';
import About from '../components/About';
import Explore from '../components/Explore';
import Shop from '../components/Shop';
import RecommendedVideos from '../components/RecommendedVideos';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <AdsBar />
      <Navbar />
      <Slider title="Perfume Tips Tricks" link={'shop now'} />
      <Featured />
      <About />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <Clients />
      <Footer />
    </>
  );
};

export default HomePage;
