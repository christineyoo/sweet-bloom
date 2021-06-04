/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import ItemLink from '../../organisms/itemLink/ItemLink';
import './Shop.css';

class Shop extends Component {
  static contextType = ApiContext;

  componentDidMount() {}

  renderItems = () => {
    const copyItems = this.context.items || [];

    return (
      <div className='shop-flex'>
        {copyItems.map((item, i) => {
          return (
            <ItemLink
              key={i}
              item_name={item.item_name}
              item_price={item.item_price}
              item_url={item.item_url}
            />
          );
        })}
      </div>
    );
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
        {this.renderItems()}
      </div>
    );
  }
}

export default Shop;
