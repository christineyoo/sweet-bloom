import React, { Component } from 'react';
import AddressForm from '../../organisms/addressForm/AddressForm';
import './Checkout.css';
import ItemCard from '../../organisms/itemCard/ItemCard';
import PropTypes from 'prop-types';
import ValidationError from '../../validationError/ValidationError';

class Checkout extends Component {
  static propTypes = {
    history: PropTypes.object
  };

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
    },
    shippingData: {
      shipName: '',
      shipAddress: '',
      shipCity: '',
      shipState: '',
      shipZipcode: ''
    }
  };

  componentDidUpdate() {
    const { name, cardNumber, expirationDate, cvc, shippingData } = this.state;
    const allFieldsCompleted =
      name.value &&
      cardNumber.value &&
      expirationDate.value &&
      cvc.value &&
      shippingData.shipName &&
      shippingData.shipAddress &&
      shippingData.shipCity &&
      shippingData.shipState &&
      shippingData.shipZipcode;
    console.log('all fields completed', !!allFieldsCompleted);
    return !!allFieldsCompleted;
  }

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
    this.props.handleShippingCost(e);
    return this.state.shipping;
  };

  checkForm = (obj) => {
    this.setState({
      shippingData: {
        shipName: obj.name,
        shipAddress: obj.address,
        shipCity: obj.city,
        shipState: obj.state,
        shipZipcode: obj.zipcode
      }
    });
  };

  checkout = () => {
    if (this.state.shippingData) {
      this.props.history.push(`/confirmation`);
    } else {
      alert('Complete the form');
    }
  };

  render() {
    return (
      <div id='checkout'>
        <h1>Checkout</h1>
        <p>
          <i>Do not refresh the page.</i>
        </p>
        <section className='checkout-flex'>
          <div className='checkout-flex-2'>
            <h2>Step 1 - Shipping Address</h2>
            <AddressForm
              handleShipAddUpdate={this.props.handleShipAddUpdate}
              handleCheckForm={(obj) => this.checkForm(obj)}
            />
            <h2>Step 2 - Payment Method</h2>
            <form className='form-flex'>
              <label htmlFor='name'>Name</label>
              <input
                id='payment-name'
                name='name'
                type='text'
                className='input'
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
                placeholder='xxxx-xxxx-xxxx-xxxx'
                className='input'
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
                className='input'
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
                placeholder='xxx'
                className='input'
                onChange={(e) => this.inputCvc(e.target.value)}
                required
              />
              {this.state.cvc.touched && (
                <ValidationError message={this.validateCvc()} />
              )}
            </form>
            <h2>Step 3 - Review Items</h2>
            <div id='checkout-step-3-flex'>
              <section id='checkout-step-3-flex-2'>
                {this.renderItemCards()}
              </section>
            </div>
          </div>
          <div className='checkout-flex-1'>
            <h1>Order Summary</h1>
            <div id='checkout-step-3-flex-1'>
              <h3>Delivery options</h3>
              <table>
                <tr>
                  <td>
                    <p className='shipping-option'>Today</p>
                  </td>
                  <td>
                    <label>
                      <input
                        type='radio'
                        name='option'
                        value={10}
                        onChange={(e) => this.updateShipping(e.target.value)}
                        checked={+this.state.shipping === 10 ? true : false}
                      />
                      $10
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='shipping-option'>Tomorrow</p>
                  </td>
                  <td>
                    <label>
                      <input
                        type='radio'
                        name='option'
                        value={5}
                        onChange={(e) => this.updateShipping(e.target.value)}
                        checked={+this.state.shipping === 5 ? true : false}
                      />
                      $5
                    </label>
                  </td>
                </tr>
              </table>
            </div>

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

            <button
              onClick={() => this.checkout()}
              disabled={!this.componentDidUpdate()}
              className={!this.componentDidUpdate() ? 'not-allowed' : ''}
              id='checkout-to-conf-button'
            >
              Checkout
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Checkout;
