import React, { Component } from 'react';
import './ItemCard.css';
import stockPhoto from '../../pages/landing/carnation-carnival-1.jpg';

class ItemCard extends Component {
  render() {
    return (
      <div className='item-card-flex'>
        <div className='item-card-flex-1'>
          <img src={stockPhoto} height='100px' width='100px' alt='item' />
        </div>
        <div className='item-card-flex-1'>
          <p>{this.props.name}</p>
          <p>${this.props.price}</p>
          <p>Quantity: {this.props.quantity}</p>
          {this.props.isOnCheckout ? null : <button>Remove Item</button>}
        </div>
      </div>
    );
  }
}

export default ItemCard;
