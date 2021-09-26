/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemLink.css';
class ItemLink extends Component {
  render() {
    return (
      <Link to={`/item/${this.props.item_id}`} className='shop-flex-1'>
        <img
          src={this.props.item_url}
          alt='product'
          className='item-link-responsive item-link-square'
          id='item-link-image'
        />
        <h1 id='item-link-h1'>{this.props.item_name}</h1>
        <h2 id='item-link-h2'>${this.props.item_price}</h2>
      </Link>
    );
  }
}

export default ItemLink;
