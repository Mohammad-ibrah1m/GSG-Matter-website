import './style.css';
import React from 'react';
import SectionHeader from '../SectionHeader';
import ClientsImage from './ClientsImage';

const Clients = () => {
  return (
    <div className="section clients">
      <SectionHeader />
      <ClientsImage />
    </div>
  );
};

export default Clients;
