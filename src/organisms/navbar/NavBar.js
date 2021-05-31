import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='flex'>
        <div className='flex-1'>Sweet Bloom</div>
        <div className='flex-1'>Shop</div>
        <div className='flex-1'>Account</div>
        <div className='flex-1'>Cart</div>
      </nav>
    );
  }
}

export default NavBar;
