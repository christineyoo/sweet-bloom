import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <>
        <div className='overlay-style' />
        <div className='modal-style' onClick={() => console.log('clicked')}>
          <h1>Leave a Review</h1>
          <form class='add-review-flex'>
            <label htmlFor='name'>Name</label>
            <input name='name' required></input>
            <label htmlFor='title'>Title</label>
            <input name='title' required></input>
            <label htmlFor='content'>Content</label>
            <textarea name='content' rows='8' columns='20' required></textarea>
            <label htmlFor='rating'>Rating</label>
            <select name='stars'>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </form>
          <button onClick={this.props.onClose}>Go back</button>
          <button>Submit</button>
        </div>
      </>
    );
  }
}

export default Modal;
