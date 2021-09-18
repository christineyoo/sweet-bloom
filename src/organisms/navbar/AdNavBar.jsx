import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const AdNavBar = () => {
  return (
    <nav id='valentine'>
      <div>
        <p>Valentine's Day Promotions</p>
        <i className='fa fa-heart-o'></i>
        <Link
          to={'/shop'}
          activeStyle={{
            color: '#83364b'
          }}
        >
          Shop Now
        </Link>
      </div>
    </nav>
  );
};

export default AdNavBar;
