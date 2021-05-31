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
            fontStyle: 'bold',
            color: '#245149',
            fontWeight: '900'
          }}
        >
          Sweet Bloom
        </Link>
        <NavLink
          className='flex-1'
          to={'/shop'}
          activeStyle={{
            fontStyle: 'bold',
            color: '#245149',
            fontWeight: '900'
          }}
        >
          Shop
        </NavLink>
        <NavLink
          className='flex-1'
          to={'/account'}
          activeStyle={{
            fontStyle: 'bold',
            color: '#245149',
            fontWeight: '900'
          }}
        >
          Account
        </NavLink>
        <NavLink
          className='flex-1'
          to={'/cart'}
          activeStyle={{
            fontStyle: 'bold',
            color: '#245149',
            fontWeight: '900'
          }}
        >
          Cart
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
