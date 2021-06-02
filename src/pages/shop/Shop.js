import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import ItemLink from '../../organisms/itemLink/ItemLink';
import './Shop.css';

class Shop extends Component {
  static contextType = ApiContext;

  renderItems = () => {
    const copyItems = this.context.items || [];
    console.log(copyItems);

    return copyItems.map((item, i) => {
      return <ItemLink key={i} item_id={item.id} item_url={item.item_url} />;
    });
  };

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
          {this.renderItems()}
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
