/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import ItemLink from '../../organisms/itemLink/ItemLink';
import './Shop.css';

class Shop extends Component {
  static contextType = ApiContext;

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  renderGroups = () => {
    const groupsArray = [
      { id: 1, group_name: 'Flowers' },
      { id: 2, group_name: 'Desserts' }
    ];
    return (
      <div style={{ textAlign: 'center' }}>
        <Link to={`/group/${groupsArray[0].id}`}>
          <button id='shop-button'>{groupsArray[0].group_name}</button>
        </Link>
        <Link to={`/group/${groupsArray[1].id}`}>
          <button id='shop-button'>{groupsArray[1].group_name}</button>
        </Link>
      </div>
    );
  };

  renderItems = () => {
    const copyItems = this.context.items || [];
    return (
      <div className='shop-flex'>
        {copyItems.map((item, i) => {
          return (
            <ItemLink
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
      <div id='shop'>
        <h1>Shop All Items</h1>
        {this.renderGroups()}
        {this.renderItems()}
        <button id='shop-button' onClick={() => this.scrollToTop()}>Back to top</button>
      </div>
    );
  }
}

export default Shop;
