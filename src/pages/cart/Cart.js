import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../organisms/itemCard/ItemCard';
import './Cart.css';

class Cart extends Component {
  renderItemCards = () => {
    const itemsInCart = this.props.itemsInCart;
    console.log('itemsinCart', itemsInCart);
    if (itemsInCart.length === 0) return null;
    return itemsInCart.map((item, i) => {
      return (
        <ItemCard
          handleDeleteItem={this.props.handleDeleteItem}
          key={i}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          url={item.url}
        />
      );
    });
  };

  totalQuantity = () => {
    const itemsInCart = this.props.itemsInCart;
    if (itemsInCart.length === 0) return null;
    const quantityArr = itemsInCart.map((item) => +item.quantity);
    return quantityArr.reduce((res, curr) => res + curr);
  };

  totalPrice = () => {
    const itemsInCart = this.props.itemsInCart;
    if (itemsInCart.length === 0) return null;
    const itemTotals = itemsInCart.map((item) => +item.price * +item.quantity);
    return itemTotals.reduce((res, curr) => res + curr);
  };

  render() {
    return (
      <div id='cart'>
        <h1>Shopping cart</h1>
        {this.props.itemsInCart.length === 0 ? (
          <h2 style={{ 'margin-bottom': '100%' }}>Cart is empty</h2>
        ) : (
          <div className='cart-flex'>
            <section className='cart-flex-2'>{this.renderItemCards()}</section>
            <section className='cart-flex-1'>
              <h1>Subtotal</h1>
              <h2>${this.totalPrice()}</h2>
              <h3>{this.totalQuantity()} items</h3>
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
        )}
      </div>
    );
  }
}

export default Cart;
