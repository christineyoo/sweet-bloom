/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemLink extends Component {
  render() {
    return (
      <Link to={`/item`} className='shop-flex-1'>
        {this.props.item_name} ${this.props.item_price}
        <br />
        <img src={this.props.item_url} height='250px' alt='product' />
      </Link>
    );
  }
}

export default ItemLink;
