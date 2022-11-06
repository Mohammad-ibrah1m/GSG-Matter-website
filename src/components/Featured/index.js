import './style.css';

import React from 'react';
import ItemBox from '../ItemBox';
import SectionHeader from '../SectionHeader';

const Featured = () => {
  const FeaturedData = [
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-2.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-3.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-4.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-5.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-6.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-7.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$599',
      image: 'assets/images/featured-8.png',
    },
  ];
  return (
    <section className="section bg-grey">
      <div className="container">
        <SectionHeader />
        <div className="featured-items">
          {FeaturedData.map((item, index) => {
            return (
              <>
                <ItemBox {...item} id={index} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
