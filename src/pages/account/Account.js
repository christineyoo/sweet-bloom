import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
  state = {};
  render() {
    return (
      <div id='account'>
        <h1>Account Login</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <br />
          <input id='email' type='text' name='email' required />
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <input id='password' type='text' name='password' required />
          <br />
          <button type='submit'>Log in</button>
        </form>
      </div>
    );
  }
}

export default Account;
