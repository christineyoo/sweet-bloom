import React, { Component } from 'react';
import './Reviews.css';

class ReviewCard extends Component {
  render() {
    return (
      <div className='review-card'>
        <h1>{this.props.title}</h1>
        <h2>Rating: {this.props.rating}</h2>
        <p>
          By {this.props.name} on {this.props.date}
        </p>
        <p>{this.props.content}</p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default ReviewCard;
