import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';

class Confirmation extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Thank you for shopping with Sweet Bloom!</h1>
        <h2>Your order details are shown below.</h2>
        <h3>Order Confirmation</h3>
        <p>Order #123-456-789</p>
        <p>Items</p>
        <ul>
          <li>Item name (1)</li>
          <li>Item name (1)</li>
          <li>Item name (1)</li>
          <li>Item name (1)</li>
        </ul>
        <div className='confirmation-flex'>
          <div className='confirmation-flex-1'>
            <div id='confirmation-items-flex'>
              <p className='confirmation-items-flex-1'>Total before tax</p>
              <p className='confirmation-items-flex-1'>$210</p>
            </div>
            <div id='confirmation-items-flex'>
              <p className='confirmation-items-flex-1'>Tax</p>
              <p className='confirmation-items-flex-1'>$21</p>
            </div>
            <hr />
            <div id='confirmation-items-flex'>
              <p className='confirmation-items-flex-1'>Subtotal</p>
              <p className='confirmation-items-flex-1'>$231</p>
            </div>
          </div>
          <div className='confirmation-flex-1'>
            <h4>Delivery Details</h4>
            <p>Arriving today</p>
            <p><strong>Ship to:</strong></p>
            <p>Darlene H.</p>
            <p>1234 Main Street</p>
            <p>Los Angeles, CA 90006</p>
          </div>
        </div>
        <Link to='/shop'>
          <button>Shop more</button>
        </Link>
      </div>
    );
  }
}

export default Confirmation;
