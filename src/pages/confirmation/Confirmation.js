import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';

class Confirmation extends Component {
  totalPrice = () => {
    const itemsInCart = this.props.itemsInCart;
    if (itemsInCart.length === 0) return null;
    const itemTotals = itemsInCart.map((item) => +item.price * +item.quantity);
    return itemTotals.reduce((res, curr) => res + curr);
  };

  renderItemSummary = () => {
    const itemsInCart = this.props.itemsInCart;
    return itemsInCart.map((item, i) => {
      return (
        <li key={i}>
          {item.name} ({item.quantity})
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Thank you for shopping with Sweet Bloom!</h1>
        <h2>Your order details are shown below.</h2>
        <h3>Order Confirmation</h3>
        <p>Order #123-456-789</p>
        <p>Items</p>
        <ul>{this.renderItemSummary()}</ul>
        <div className='confirmation-flex'>
          <div className='confirmation-flex-1'>
            <div id='confirmation-items-flex'>
              <p className='confirmation-items-flex-1'>Total before shipping</p>
              <p className='confirmation-items-flex-1'>${this.totalPrice()}</p>
            </div>
            <div id='confirmation-items-flex'>
              <p className='confirmation-items-flex-1'>Shipping</p>
              <p className='confirmation-items-flex-1'>
                ${this.props.shipping}
              </p>
            </div>
            <hr />
            <div id='confirmation-items-flex'>
              <p className='confirmation-items-flex-1'>Order Total</p>
              <p className='confirmation-items-flex-1'>
                ${+this.totalPrice() + +this.props.shipping}
              </p>
            </div>
          </div>
          <div className='confirmation-flex-1'>
            <h4>Delivery Details</h4>
            <p>Arriving today</p>
            <p>
              <strong>Ship to:</strong>
            </p>
            <p>Darlene H.</p>
            <p>1234 Main Street</p>
            <p>Los Angeles, CA 90006</p>
          </div>
        </div>
        <Link to='/shop'>
          <button>Shop more</button>
        </Link>
      </div>
    );
  }
}

export default Confirmation;
