import React, { Component } from 'react';
import './ItemCard.css';
import stockPhoto from '../../pages/landing/carnation-carnival-1.jpg';

class ItemCard extends Component {
  state = {};
  render() {
    return (
      <div className='item-card-flex'>
        <div className='item-card-flex-1'>
          <img src={stockPhoto} height='100px' width='100px' alt='item' />
        </div>
        <div className='item-card-flex-1'>
          <p>Product Name</p>
          <p>$50</p>
          <p>Quantity: 1</p>
        </div>
      </div>
    );
  }
}

export default ItemCard;
