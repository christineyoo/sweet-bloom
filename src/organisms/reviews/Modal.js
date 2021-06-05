import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <>
        <div className='overlay-style' />
        <div className='modal-style' onClick={() => console.log('clicked')}>
          <button onClick={this.props.onClose}>Close modal</button>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
