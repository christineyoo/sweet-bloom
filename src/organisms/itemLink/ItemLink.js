/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemLink.css';
class ItemLink extends Component {
  render() {
    return (
      <Link to={`/item/${this.props.item_id}`} className='shop-flex-1'>
        <p>
          {this.props.item_name} ${this.props.item_price}
        </p>
        <img
          src={this.props.item_url}
          width='300px'
          alt='product'
          className='responsive'
        />
      </Link>
    );
  }
}

export default ItemLink;
