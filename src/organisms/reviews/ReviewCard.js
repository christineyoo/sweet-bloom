import React, { Component } from 'react';
import './Reviews.css';

class ReviewCard extends Component {
  state = {};
  render() {
    return (
      <div className='review-card'>
        <h1>Amazing flowers!</h1>
        <h1>*****</h1>
        <p>Jenny 6/4/21</p>
        <p>
          Cupcake wafer cupcake chupa chups carrot cake biscuit cookie. Tart
          candy canes marshmallow marshmallow powder lollipop biscuit toffee oat
          cake. Fruitcake cupcake liquorice sweet roll wafer muffin candy.
          Dessert jujubes biscuit.
        </p>
      </div>
    );
  }
}

export default ReviewCard;
