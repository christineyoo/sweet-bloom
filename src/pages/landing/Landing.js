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
          <h2>Features</h2>
          <h3>three cool features</h3>
          <div className='landing-flex'>
            <img
              className='landing-flex-2'
              src={stockPhoto}
              height='300px'
              width='260px'
              alt='stock photo'
            />
            <div className='landing-flex-1'>
              <h4>feature 1</h4>
              <p>sentences about feature 1</p>f
            </div>
          </div>
          <div className='landing-flex'>
            <div className='landing-flex-1'>
              <h4>feature 2</h4>
              <p>sentences about feature 2</p>
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
              <h4>feature 3</h4>
              <p>sentences about feature 3</p>
            </div>
          </div>
        </article>
        <article>
          <h2>Customer Reviews</h2>
          <h3>three customer reviews</h3>
          <div className='landing-flex'>
            <section className='landing-flex-1'>
              <img
                src={stockPhoto}
                height='200px'
                width='200px'
                alt='stock photo'
              />
              <h4>review 1</h4>
              <p>
                Candy danish biscuit toffee toffee toffee dragée. Sesame snaps
                soufflé marzipan cheesecake cookie macaroon gummi bears. Pie
                marshmallow fruitcake cake macaroon icing.
              </p>
              <br />
              <p>- Danielle from Baton Rouge, LA</p>
            </section>
            <section className='landing-flex-1'>
              <img
                src={stockPhoto}
                height='200px'
                width='200px'
                alt='stock photo'
              />
              <h4>review 2</h4>
              <p>
                Candy danish biscuit toffee toffee toffee dragée. Sesame snaps
                soufflé marzipan cheesecake cookie macaroon gummi bears. Pie
                marshmallow fruitcake cake macaroon icing.
              </p>
              <br />
              <p>- Jeremy from Los Angeles, CA</p>
            </section>
            <section className='landing-flex-1'>
              <img
                src={stockPhoto}
                height='200px'
                width='200px'
                alt='stock photo'
              />
              <h4>review 3</h4>
              <p>
                Candy danish biscuit toffee toffee toffee dragée. Sesame snaps
                soufflé marzipan cheesecake cookie macaroon gummi bears. Pie
                marshmallow fruitcake cake macaroon icing.
              </p>
              <br />
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
