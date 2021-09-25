import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Confirmation.css';

class Confirmation extends Component {
  totalPrice = () => {
    const itemsInCart = this.props.itemsInCart || [];
    if (itemsInCart.length === 0) return null;
    const itemTotals = itemsInCart.map((item) => +item.price * +item.quantity);
    return itemTotals.reduce((res, curr) => res + curr);
  };

  renderItemSummary = () => {
    const itemsInCart = this.props.itemsInCart || [];
    return itemsInCart.map((item, i) => {
      return (
        <li key={i}>
          {item.name} ({item.quantity})
        </li>
      );
    });
  };

  renderShipAddDetails = () => {
    const { name, address, city, state, zipcode } =
      this.props.shippingData || [];
    return (
      <>
        <p>{name}</p>
        <p>{address}</p>
        <p>
          {city}, {state}, {zipcode}
        </p>
      </>
    );
  };

  renderDeliveryDay = () => {
    if (+this.props.shipping === 10) {
      return <p>Arriving today to</p>;
    } else {
      return <p>Arriving tomorrow to</p>;
    }
  };

  componentWillUnmount() {
    this.props.handleClearCart();
    window.location.reload();
  }

  render() {
    return (
      <div id='confirmation'>
        <article id='confirmation-thank-you'>
          <h1>THANK YOU</h1>
          <h2>ORDER CONFIRMED</h2>
        </article>
        <h3>Order Confirmation</h3>
        <h2>
          Order #{Math.floor(Math.random() * 1000)}-
          {Math.floor(Math.random() * 1000)}-{Math.floor(Math.random() * 1000)}
        </h2>
        <h3>Your Purchased Items</h3>
        <ul>{this.renderItemSummary()}</ul>
        <div className='confirmation-flex'>
          <div className='confirmation-flex-1'>
            <h4>Payment Details</h4>
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
            {this.renderDeliveryDay()}
            {this.renderShipAddDetails()}
          </div>
        </div>
        <Link to='/shop'>
          <button id='landing-button'>Shop more</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Confirmation);
