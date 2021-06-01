/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemLink extends Component {
  render() {
    return (
      <Link to={`/item`} className='shop-flex-1'>
        <img src={this.props.item_url} alt='stock photo' />
      </Link>
    );
  }
}

export default ItemLink;
