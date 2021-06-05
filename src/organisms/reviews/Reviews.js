import React, { Component } from 'react';
import ReviewCard from './ReviewCard';
import Modal from './Modal';

class Reviews extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
        </button>
        <Modal
          open={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <h1>Fancy Modal</h1>
        </Modal>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    );
  }
}

export default Reviews;
