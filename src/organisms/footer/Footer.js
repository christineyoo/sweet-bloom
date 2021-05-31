import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright &copy; 2021 Christine Yoo</p>
        <a
          href='https://www.linkedin.com/in/christine-yoo-cy/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <br />
        <a
          href='https://github.com/christineyoo'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'></i>
        </a>
      </footer>
    );
  }
}

export default Footer;
