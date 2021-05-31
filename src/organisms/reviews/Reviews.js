import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

class Reviews extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    );
  }
}

export default Reviews;
