import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../organisms/itemCard/ItemCard';
import './Cart.css';
import stockPhoto1 from '../../images/stock-photo-1.jpg';
import stockPhoto2 from '../../images/stock-photo-2.jpg';
import stockPhoto3 from '../../images/stock-photo-3.jpg';

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
        <p>
          <i>Do not refresh the page.</i>
        </p>
        {this.props.itemsInCart.length === 0 ? (
          <div className='cart-column-flex'>
            <h2>Cart is empty</h2>
          </div>
        ) : (
          <div className='cart-flex'>
            <section className='cart-flex-2'>{this.renderItemCards()}</section>
            <section className='cart-flex-1' id='subtotal'>
              <h1>Subtotal</h1>
              <h2>${this.totalPrice()}</h2>
              <h3>{this.totalQuantity()} items</h3>
              <Link to='/checkout'>
                <button>Proceed to Checkout</button>
              </Link>
            </section>
          </div>
        )}
        <hr />
        <h3>Explore our shop</h3>
        <div className='cart-flex'>
          <section className='cart-flex-1'>
            <Link to={`/item/6`}>
              <img src={stockPhoto1} height='300px' alt='loading...' />
              <h3>Carnation Carnival</h3>
              <p>$25</p>
            </Link>
          </section>
          <section className='cart-flex-1'>
            <Link to={`/item/20`}>
              <img src={stockPhoto2} height='300px' alt='loading...' />
              <h3>Tulip Town in Pink/Purple</h3>
              <p>$20</p>
            </Link>
          </section>
          <section className='cart-flex-1'>
            <Link to={`/item/19`}>
              <img src={stockPhoto3} height='300px' alt='loading...' />
              <h3>Sunflowers</h3>
              <p>$15</p>
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default Cart;
