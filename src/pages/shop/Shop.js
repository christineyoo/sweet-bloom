/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom';
import ItemLink from '../../organisms/itemLink/ItemLink';
import './Shop.css';

class Shop extends Component {
  static contextType = ApiContext;

  renderGroups = () => {
    const copyGroups = this.context.groups || [];
    const groups = copyGroups.map((group, i) => {
      return (
        <Link key={i} to={`/group/${group.id}`}>
          {group.group_name}&nbsp;
        </Link>
      );
    });

    return groups;
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
        <h1>All Items</h1>
        <h2>
          Browse through our wide collection of floral bouquets and desserts.
        </h2>
        <h3>Filter by {this.renderGroups()}</h3>
        {this.renderItems()}
      </div>
    );
  }
}

export default Shop;
