import React from 'react';
import SectionHeader from '../SectionHeader';
import Style from './style.module.css';
import AsSeenOnImage from './AsSeenOnImage';
import { Container } from 'react-bootstrap';
import ItemBox from '../ItemBox';

const AsSeenOn = () => {
  const asSeenImages = [
    'assets/images/AsSeenOn_1.png',
    'assets/images/AsSeenOn_2.png',
    'assets/images/AsSeenOn_3.png',
    'assets/images/AsSeenOn_4.png',
  ];

  const youMayLike = [
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '800',
      image: 'assets/images/featured.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '499',
      image: 'assets/images/featured-2.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '299',
      image: 'assets/images/featured-3.png',
    },
    {
      title: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '299',
      image: 'assets/images/featured-4.png',
    },
  ];
  return (
    <>
      <div className="section">
        <SectionHeader title="As seen on Instagram" />
        <Container>
          <AsSeenOnImage images={asSeenImages} />
          {/* <div className="featured-items">
            {youMayLike?.map((item, index) => {
              return (
                <>
                  <ItemBox {...item} id={index} />
                </>
              );
            })}
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default AsSeenOn;
