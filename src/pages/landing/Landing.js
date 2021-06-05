/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import stockPhoto from './carnation-carnival-1.jpg';

class Landing extends Component {
  render() {
    return (
      <div>
        <article>
          <h1>Sweet Bloom</h1>
          <h2>Farm fresh flowers and decadent desserts delivered anywhere.</h2>
        </article>
        <article>
          <h2>How it works</h2>
          <h3>Three simple steps</h3>
          <div className='landing-flex'>
            <section className='landing-flex-1'>
              <i class='fas fa-mouse-pointer fa-5x'></i>
              <h4>Shop</h4>
              <p>
                Browse through dozens of options of flower bouquets
                hand-prepared by our experienced florists and delectable sweets
                prepared fresh daily by our artisan chefs.
              </p>
            </section>
            <section className='landing-flex-1'>
              <i class='fas fa-truck fa-5x'></i>
              <h4>Deliver</h4>
              <p>
                Once you've selected and purchased your items, all products are
                packaged in tempeature-controlled boxes and delivered to the
                location of your choice.
              </p>
            </section>
            <section className='landing-flex-1'>
              <i class='far fa-smile fa-5x'></i>
              <h4>Enjoy</h4>
              <p>
                Simply enjoy the delightful experience of our floral
                arrangements and desserts!
              </p>
            </section>
          </div>
        </article>
        <article>
          <h2>Benefits and Features</h2>
          <div className='landing-flex'>
            <img
              className='landing-flex-2'
              src={stockPhoto}
              height='300px'
              width='260px'
              alt='stock photo'
            />
            <div className='landing-flex-1'>
              <h3>User Authentication and Authorization</h3>
              <p>
                Shop with ease knowing that your information and selections are
                part of a secure experience.
              </p>
            </div>
          </div>
          <div className='landing-flex'>
            <div className='landing-flex-1'>
              <h3>Reviews</h3>
              <p>
                Users may read, create, update, and delete reviews for any one
                of our products.
              </p>
            </div>
            <img
              className='landing-flex-2'
              src={stockPhoto}
              height='300px'
              width='260px'
              alt='stock photo'
            />
          </div>
          <div className='landing-flex'>
            <img
              className='landing-flex-2'
              src={stockPhoto}
              height='300px'
              width='260px'
              alt='stock photo'
            />
            <div className='landing-flex-1'>
              <h3>Easily adjust what's in your cart</h3>
              <p>
                Changed your mind about something? Want to go back and check
                something out? No problem. You can shop on your terms.
              </p>
            </div>
          </div>
        </article>
        <article>
          <h2>Customer Reviews</h2>
          <div className='landing-flex'>
            <section className='landing-flex-1'>
              <img
                src={stockPhoto}
                height='200px'
                width='200px'
                alt='stock photo'
              />
              <h3>"High quality"</h3>
              <p>
                I ordered from Sweet Bloom for Mother's Day and it was the best
                online service I've received.
              </p>
              <p>- Danielle from Baton Rouge, LA</p>
            </section>
            <section className='landing-flex-1'>
              <img
                src={stockPhoto}
                height='200px'
                width='200px'
                alt='stock photo'
              />
              <h3>"Happy wife happy life"</h3>
              <p>
                Thank you, Sweet Bloom, for delivering the best flowers and
                dessert to celebrate our 30th wedding anniversary.
              </p>
              <p>- Erik from Los Angeles, CA</p>
            </section>
            <section className='landing-flex-1'>
              <img
                src={stockPhoto}
                height='200px'
                width='200px'
                alt='stock photo'
              />
              <h3>"Consistent service"</h3>
              <p>
                There is no place that does flowers and desserts like Sweet
                Bloom! Always delicious, fresh, and beautiful.
              </p>
              <p>- Brianna from Suwanee, GA</p>
            </section>
          </div>
        </article>
        <Link to='/shop'>
          <button>Shop</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
