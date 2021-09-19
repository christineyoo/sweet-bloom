import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='flex'>
        <Link
          className='flex-1'
          to={'/'}
          activeStyle={{
            color: '#83364b'
          }}
        >
          Home
        </Link>
        <NavLink
          className='flex-1'
          to={'/shop'}
          activeStyle={{
            color: '#83364b'
          }}
        >
          Shop
        </NavLink>
        <NavLink
          className='flex-1'
          to={'/cart'}
          activeStyle={{
            color: '#83364b'
          }}
        >
          Cart
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
