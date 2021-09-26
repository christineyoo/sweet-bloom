/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import stockPhoto1 from '../../images/stock-photo-1.jpg';
import stockPhoto2 from '../../images/stock-photo-2.jpg';
import stockPhoto3 from '../../images/stock-photo-3.jpg';

class Landing extends Component {
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
            <Link to={`/item/19`}>
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
            </Link>
            <Link to={`/item/20`}>
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
            </Link>
            <Link to={`/item/6`}>
              <section className='landing-flex-1'>
                <img src={stockPhoto1} alt='carnations' id='carnations' />
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
            </Link>
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
      </>
    );
  }
}

export default Landing;
