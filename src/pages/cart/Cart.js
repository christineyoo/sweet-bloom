import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../organisms/itemCard/ItemCard';
import './Cart.css';

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Shopping cart</h1>
        <h2>Cart is empty</h2>
        <div className='cart-flex'>
          <section className='cart-flex-2'>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </section>
          <section className='cart-flex-1'>
            <h1>Subtotal</h1>
            <h2>$200</h2>
            <h3>4 items</h3>
            <Link to='/checkout'>
              <button>Proceed to Checkout</button>
            </Link>
            <form>
              <h3>Do you want to add a message?</h3>
              <textarea
                rows='5'
                cols='30'
                placeholder='Gift message...'
              ></textarea>
              <p>
                <i>
                  Add your name to let the recipient know the gift is from you
                </i>
              </p>
              <button>Submit Message</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Cart;
