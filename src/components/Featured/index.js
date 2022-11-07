import './style.css';

import React from 'react';
import ItemBox from '../ItemBox';
import SectionHeader from '../SectionHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Featured = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [flag, setFlag] = useState(false);
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

  const getData = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setAllProducts(response.data.products);
    setFlag(true);
  };

  useEffect(() => {
    getData();
  });

  return (
    <section className={!!flag ? 'section bg-grey' : 'section bg-grey hidden'}>
      <div className="container">
        <SectionHeader />
        <div className="featured-items">
          {FeaturedData.map((item, index) => {
            return (
              <>{flag && <ItemBox {...item} id={index} allProducts={allProducts} flag={flag} />}</>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
