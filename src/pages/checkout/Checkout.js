import React, { Component } from 'react';
import AddressForm from '../../organisms/addressForm/AddressForm';
import './Checkout.css';
import ItemCard from '../../organisms/itemCard/ItemCard';
import { Link } from 'react-router-dom';
import ValidationError from '../../validationError/ValidationError';

class Checkout extends Component {
  state = {
    shipping: 10,
    name: {
      value: '',
      touched: false
    },
    cardNumber: {
      value: '',
      touched: false
    },
    expirationDate: {
      value: '',
      touched: false
    },
    cvc: {
      value: '',
      touched: false
    }
  };

  inputName = (name) => {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    });
  };

  inputCardNumber = (cardNumber) => {
    this.setState({
      cardNumber: {
        value: cardNumber,
        touched: true
      }
    });
  };

  inputExpirationDate = (expirationDate) => {
    this.setState({
      expirationDate: {
        value: expirationDate,
        touched: true
      }
    });
  };

  inputCvc = (cvc) => {
    this.setState({
      cvc: {
        value: cvc,
        touched: true
      }
    });
  };

  validateName = () => {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'A name is required.';
    }
  };

  validateCardNumber = () => {
    const cardNumber = this.state.cardNumber.value.trim();
    if (cardNumber.length === 0) {
      return 'A card number is required.';
    }
  };

  validateExpirationDate = () => {
    const expirationDate = this.state.expirationDate.value.trim();
    if (expirationDate.length === 0) {
      return 'An expiration date is required.';
    }
  };

  validateCvc = () => {
    const cvc = this.state.cvc.value.trim();
    if (cvc.length === 0) {
      return 'A CVC number is required.';
    }
  };

  renderItemCards = () => {
    const itemsInCart = this.props.itemsInCart;
    if (itemsInCart.length === 0) return null;
    return itemsInCart.map((item, i) => {
      return (
        <ItemCard
          key={i}
          isOnCheckout
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          url={item.url}
        />
      );
    });
  };

  totalPrice = () => {
    const itemsInCart = this.props.itemsInCart;
    if (itemsInCart.length === 0) return null;
    const itemTotals = itemsInCart.map((item) => +item.price * +item.quantity);
    const totalPrice = itemTotals.reduce((res, curr) => res + curr);
    return totalPrice;
  };

  updateShipping = (e) => {
    this.setState({ shipping: e });
    this.props.handleShipping(e);
    return this.state.shipping;
  };

  render() {
    return (
      <div id='checkout'>
        <h1>Checkout</h1>
        <section className='checkout-flex'>
          <div className='checkout-flex-2'>
            <h2>Step 1 - Shipping Address</h2>
            <AddressForm />
            <h2>Step 2 - Payment Method</h2>
            <form className='form-flex'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                name='name'
                type='text'
                onChange={(e) => this.inputName(e.target.value)}
                required
              />
              {this.state.name.touched && (
                <ValidationError message={this.validateName()} />
              )}
              <label htmlFor='card-number'>Card Number</label>
              <input
                id='card-number'
                name='card-number'
                type='text'
                onChange={(e) => this.inputCardNumber(e.target.value)}
                required
              />
              {this.state.cardNumber.touched && (
                <ValidationError message={this.validateCardNumber()} />
              )}
              <label htmlFor='exp-date'>Expiration Date</label>
              <input
                id='exp-date'
                name='exp-date'
                type='text'
                placeholder='mm/yy'
                onChange={(e) => this.inputExpirationDate(e.target.value)}
                required
              />
              {this.state.expirationDate.touched && (
                <ValidationError message={this.validateExpirationDate()} />
              )}
              <label htmlFor='cvc'>CVC</label>
              <input
                id='cvc'
                name='cvc'
                type='text'
                onChange={(e) => this.inputCvc(e.target.value)}
                required
              />
              {this.state.cvc.touched && (
                <ValidationError message={this.validateCvc()} />
              )}
            </form>
            <h3>Billing Address</h3>
            <AddressForm />
            <h2>Step 3 - Review Items and Shipping</h2>
            <div id='checkout-step-3-flex'>
              <section id='checkout-step-3-flex-2'>
                {this.renderItemCards()}
              </section>
              <section id='checkout-step-3-flex-1'>
                <h3>Delivery options</h3>
                <p>Today (2 hrs)</p>
                <input
                  type='radio'
                  name='option'
                  value={10}
                  onChange={(e) => this.updateShipping(e.target.value)}
                />
                <label>$10</label>

                <p>Tomorrow</p>
                <input
                  type='radio'
                  name='option'
                  value={7}
                  onChange={(e) => this.updateShipping(e.target.value)}
                />
                <label>$7</label>

                <p>Custom Date</p>
                <input
                  type='radio'
                  name='option'
                  value={5}
                  onChange={(e) => this.updateShipping(e.target.value)}
                />
                <label>$5</label>
              </section>
            </div>
          </div>
          <div className='checkout-flex-1'>
            <h2>Order Summary</h2>
            <div id='order-summary-flex'>
              <p className='order-summary-flex-1'>Items</p>
              <p className='order-summary-flex-1'>${this.totalPrice()}</p>
            </div>
            <div id='order-summary-flex'>
              <p className='order-summary-flex-1'>Shipping</p>
              <p className='order-summary-flex-1'>${this.state.shipping}</p>
            </div>
            <hr />
            <div id='order-summary-flex'>
              <p className='order-summary-flex-1'>
                <strong>Order Total</strong>
              </p>
              <p className='order-summary-flex-1'>
                <strong>${+this.totalPrice() + +this.state.shipping}</strong>
              </p>
            </div>
            <Link to={'/confirmation'}>
              <button>Place Order</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Checkout;
