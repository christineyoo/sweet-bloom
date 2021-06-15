import React, { Component } from 'react';
import './AddressForm.css';
import ValidationError from '../../validationError/ValidationError';

class AddressForm extends Component {
  state = {
    name: {
      value: '',
      touched: false
    },
    address: {
      value: '',
      touched: false
    },
    city: {
      value: '',
      touched: false
    },
    state: {
      value: '',
      touched: false
    },
    zipcode: {
      value: '',
      touched: false
    }
  };

  inputName = (name) => {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    });
  };

  inputAddress = (address) => {
    this.setState({
      address: {
        value: address,
        touched: true
      }
    });
  };

  inputCity = (city) => {
    this.setState({
      city: {
        value: city,
        touched: true
      }
    });
  };

  inputState = (state) => {
    this.setState({
      state: {
        value: state,
        touched: true
      }
    });
  };

  inputZipcode = (zipcode) => {
    this.setState({
      zipcode: {
        value: zipcode,
        touched: true
      }
    });
  };

  validateName = () => {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'A name is required.';
    }
  };

  validateAddress = () => {
    const address = this.state.address.value.trim();
    if (address.length === 0) {
      return 'An address is required.';
    }
  };

  validateCity = () => {
    const city = this.state.city.value.trim();
    if (city.length === 0) {
      return 'A city is required.';
    }
  };

  validateState = () => {
    const state = this.state.state.value.trim();
    if (state.length === 0) {
      return 'A state is required.';
    }
    if (state.length !== 2) {
      return 'Please include a valid 2-letter abbreviation.';
    }
  };

  validateZipcode = () => {
    const zipcode = this.state.zipcode.value.trim();
    if (zipcode.length === 0) {
      return 'A zipcode is required.';
    }
    if (zipcode.length !== 5) {
      return 'Please include a valid zipcode.';
    }
  };

  render() {
    return (
      <form className='form-flex'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={(e) => this.inputName(e.target.value)}
          required
        />
        {this.state.name.touched && (
          <ValidationError message={this.validateName()} />
        )}
        <label htmlFor='address'>Address</label>
        <input
          id='address'
          name='address'
          type='text'
          onChange={(e) => this.inputAddress(e.target.value)}
          required
        />
        {this.state.address.touched && (
          <ValidationError message={this.validateAddress()} />
        )}
        <label htmlFor='city'>City</label>
        <input
          id='city'
          name='city'
          type='text'
          onChange={(e) => this.inputCity(e.target.value)}
          required
        />
        {this.state.city.touched && (
          <ValidationError message={this.validateCity()} />
        )}
        <label htmlFor='state'>State</label>
        <input
          id='state'
          name='state'
          type='text'
          onChange={(e) => this.inputState(e.target.value)}
          required
        />
        {this.state.state.touched && (
          <ValidationError message={this.validateState()} />
        )}
        <label htmlFor='zipcode'>Zipcode</label>
        <input
          id='zipcode'
          name='zipcode'
          type='text'
          onChange={(e) => this.inputZipcode(e.target.value)}
          required
        />
        {this.state.zipcode.touched && (
          <ValidationError message={this.validateZipcode()} />
        )}
      </form>
    );
  }
}

export default AddressForm;
