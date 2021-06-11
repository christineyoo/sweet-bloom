import React, { Component } from 'react';
import AddReview from './AddReview';

class Reviews extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <button onClick={() => this.setState({ isOpen: true })}>
          Add Review
        </button>
        <AddReview
          open={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
          itemId={this.props.itemId}
          history={this.props.history}
        ></AddReview>
      </div>
    );
  }
}

export default Reviews;
