/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './Item.css';
import stockPhoto from '../landing/carnation-carnival-1.jpg';

class Item extends Component {
  state = {};

  renderQuantity = () => {
    const quantityArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const quantityOptions = quantityArr.map((q, i) => {
      return (
        <option key={i} value={i + 1}>
          {q}
        </option>
      );
    });
    return quantityOptions;
  };
  render() {
    return (
      <div className='item-flex'>
        <div className='item-flex-1'>
          <img
            src={stockPhoto}
            height='500px'
            width='450px'
            alt='stock photo'
          />
        </div>

        <div className='item-flex-1'>
          <h1>Item Name</h1>
          <h2>$50</h2>
          <label htmlFor='groups'>Quantity</label>
          <select name='quantity' id='quantity'>
            {this.renderQuantity()}
          </select>
          <h3>Description</h3>
          <p>
            Lollipop biscuit pastry. Biscuit marzipan tart cheesecake pudding
            icing soufflé croissant. Dragée gingerbread tootsie roll soufflé.
            Icing pie sugar plum. Cake jelly tart chocolate bar toffee chupa
            chups chocolate. Bonbon bear claw donut soufflé candy canes
            chocolate cake. Icing halvah sugar plum lemon drops chocolate bar.
          </p>
          <h4>Note</h4>
          <p>
            In the case where the actual stems are not available, our florists
            will select the next best option.
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
