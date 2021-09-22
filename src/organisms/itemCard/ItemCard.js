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
          <img src={this.props.url} height='175px' alt='item' />
        </div>
        <div className='item-card-flex-1'>
          <p>{this.props.name}</p>
          <p>${this.props.price}</p>
          <p>Quantity: {this.props.quantity}</p>
          {this.props.isOnCheckout ? null : (
            <button onClick={() => this.removeItem()} id ='remove-button'>Remove Item</button>
          )}
        </div>
      </div>
    );
  }
}

export default ItemCard;
