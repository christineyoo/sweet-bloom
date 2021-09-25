import React, { Component } from 'react';
import './ItemCard.css';

class ItemCard extends Component {
  removeItem = () => {
    this.props.handleDeleteItem(this.props.name);
  };

  render() {
    return (
      <div className='item-card-flex'>
        <div className='item-card-flex-1'>
          <img src={this.props.url} className='thumbnail-item-link-square' alt='item' />
        </div>
        <div className='item-card-flex-1'>
          <h1>{this.props.name}</h1>
          <h2>${this.props.price}</h2>
          <h2>Quantity: {this.props.quantity}</h2>
          {this.props.isOnCheckout ? null : (
            <button onClick={() => this.removeItem()} id='remove-button'>
              Remove Item
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ItemCard;
