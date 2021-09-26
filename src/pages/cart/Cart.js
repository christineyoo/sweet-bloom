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
    const quantityInCart = quantityArr.reduce((res, curr) => res + curr);
    if (quantityInCart === 1) {
      return <h3>{quantityInCart} item</h3>;
    } else {
      return <h3>{quantityInCart} items</h3>;
    }
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
        <p>Do not refresh the page</p>
        {this.props.itemsInCart.length === 0 ? (
          <div className='cart-column-flex'>
            <h2>Your cart is currently empty</h2>
          </div>
        ) : (
          <div className='cart-flex'>
            <section className='cart-flex-2' id='item-summary'>
              {this.renderItemCards()}
            </section>
            <section className='cart-flex-1' id='subtotal'>
              <h1>Subtotal</h1>
              <h2>${this.totalPrice()}</h2>
              {this.totalQuantity()}
              <Link to='/checkout'>
                <button id='to-checkout-button'>Proceed to Checkout</button>
              </Link>
            </section>
          </div>
        )}
        <hr />
        <article id='products'>
          <h1>Explore Our Shop</h1>
          <h2>Order Now and Get Same-Day-Delivery</h2>
          <div className='landing-flex'>
            <section className='landing-flex-1'>
              <img src={stockPhoto3} alt='sunflowers' />
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '900',
                  marginTop: '1rem'
                }}
              >
                Sunflowers
              </h3>
              <p style={{ color: '#83364b', fontWeight: '600' }}>$15</p>
            </section>
            <section className='landing-flex-1'>
              <img src={stockPhoto2} alt='tulips' />
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '900',
                  marginTop: '1rem'
                }}
              >
                Tulip Town in Pink/Purple
              </h3>
              <p style={{ color: '#83364b', fontWeight: '600' }}>$20</p>
            </section>
            <section className='landing-flex-1'>
              <img src={stockPhoto1} alt='carnations' />
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '900',
                  marginTop: '1rem'
                }}
              >
                Carnation Carnival
              </h3>
              <p style={{ color: '#83364b', fontWeight: '600' }}>$25</p>
            </section>
          </div>
          <Link to='/shop'>
            <button id='landing-button'>Shop All</button>
          </Link>
        </article>
      </div>
    );
  }
}

export default Cart;
