import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemBanner.css';

export default class ItemBanner extends Component {
  render() {
    return (
      <div style={{ margin: '0', padding: '0' }}>
        <img
          src={this.props.item_url}
          alt='product'
          className='item-link-responsive square'
          id='item-link-image'
        />
      </div>
    );
  }
}
