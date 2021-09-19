/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import './Landing.css';
import ItemBanner from '../../organisms/itemBanner/ItemBanner';
import stockPhoto1 from '../../images/stock-photo-1.jpg';
import stockPhoto2 from '../../images/stock-photo-2.jpg';
import stockPhoto3 from '../../images/stock-photo-3.jpg';

class Landing extends Component {
  static contextType = ApiContext;

  renderItems = () => {
    const copyItems = this.context.items || [];
    return (
      <div className='shop-flex'>
        {copyItems.slice(19).map((item, i) => {
          return (
            <ItemBanner
              key={i}
              item_id={item.id}
              item_name={item.item_name}
              item_price={item.item_price}
              item_url={item.item_url}
              item_description={item.item_description}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <>
        <article id='landing'>
          <h1>SWEET BLOOM</h1>
          <h2>FLOWERS AND DESSERTS</h2>
        </article>
        <article id='products'>
          <h1>Fresh, Seasonal, Beautiful</h1>
          <h2>Order Now and Get Same-Day-Delivery</h2>
          <div className='landing-flex'>
            <section className='landing-flex-1'>
              <img src={stockPhoto3} height='450px' alt='sunflowers' />
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
              <img src={stockPhoto2} height='450px' alt='tulips' />
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
              <img
                src={stockPhoto1}
                width='300px'
                height='450px'
                alt='carnations'
              />
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
        <article id='ad'>
          <h1>Valentine's Day Sale</h1>
          <h2>Enjoy an extra 15% off our best sellers</h2>
          <Link to='/shop'>
            <button id='ad-button'>Order Now</button>
          </Link>
        </article>
        <article id='banner' style={{ margin: '0', padding: '0' }}>
          <h1>SWEET BLOOM Dessert Shop</h1>
          {this.renderItems()}
        </article>
      </>
    );
  }
}

export default Landing;
