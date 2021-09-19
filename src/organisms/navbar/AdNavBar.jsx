import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const AdNavBar = () => {
  return (
    <nav id='valentine'>
      <p>Valentine's Day Promotions</p>&nbsp;
      <i className='fa fa-heart-o'></i>&nbsp;
      <Link
        to={'/shop'}
        style={{
          color: '#ffffff',
          textDecoration: 'underline',
          fontSize: '0.85rem'
        }}
      >
        Shop Now
      </Link>
    </nav>
  );
};

export default AdNavBar;
