import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

class Shop extends Component {
  render() {
    return (
      <div>
        <h1>All Items</h1>
        <h2>
          this is where you can see all the items. Create another component that
          maps through the items
        </h2>
        <h3>
          Filter by <Link to='/group'>Flowers</Link> or{' '}
          <Link to='/group'>Desserts</Link>
        </h3>
        <div className='shop-flex'>
          <Link to='/item' className='shop-flex-1'>
            picture
          </Link>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>
        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>
        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>

        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>

        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>
        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>
        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>
        <div className='shop-flex'>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
          <div className='shop-flex-1'>picture</div>
        </div>
      </div>
    );
  }
}

export default Shop;
