/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemLink extends Component {
  render() {
    return (
      <Link to={`/item`} className='shop-flex-1'>
        <img
          src={`https://images.unsplash.com/photo-1622490204793-ff463fb955cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyNTI1MzAx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`}
          alt='stock photo'
        />
      </Link>
    );
  }
}

export default ItemLink;
