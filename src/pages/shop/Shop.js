/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import ItemLink from '../../organisms/itemLink/ItemLink';
import './Shop.css';

class Shop extends Component {
  static contextType = ApiContext;

  componentDidMount() {
    this.sliceItemsArray();
  }

  sliceItemsArray = () => {
    const copyItems = this.context.items || [];
    console.log('context', copyItems);

    let slicedCopyItems = [];
    let result = '';
    for (let i = 1; i <= 8; i++) {
      console.log('slice', slicedCopyItems);
      slicedCopyItems.push(copyItems.slice(3 * i - 3, 3 * i));

      result = slicedCopyItems.forEach(() => {
        <div className='shop-flex'>
          {slicedCopyItems.map((item, i) => {
            return (
              <ItemLink
                key={i}
                item_name={item.item_name}
                item_price={item.item_price}
                item_url={item.item_url}
              />
            );
          })}
        </div>;
      });
    }
    return result;
  };

  renderItems = () => {
    const sampleArray = [
      {
        id: 1,
        item_name: 'Name',
        item_price: 10,
        item_url:
          'https://images.pexels.com/photos/7474138/pexels-photo-7474138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      {
        id: 1,
        item_name: 'Name',
        item_price: 10,
        item_url:
          'https://images.pexels.com/photos/7474138/pexels-photo-7474138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      {
        id: 1,
        item_name: 'Name',
        item_price: 10,
        item_url:
          'https://images.pexels.com/photos/7474138/pexels-photo-7474138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      }
    ];
    return (
      <div className='shop-flex'>
        {sampleArray.map((item, i) => {
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

{
  /* {() => {
            [0, 1, 2, 3, 4, 5][i].forEach((item, i) => {
              <ItemLink
                key={i}
                item_name={item.item_name}
                item_price={item.item_price}
                item_url={item.item_url}
              />;
            });
          }} */
}
