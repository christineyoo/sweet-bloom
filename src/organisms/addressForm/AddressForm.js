import React, { Component } from 'react';

class AddressForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' required /><br />

        <label htmlFor='address'>Address</label>
        <input id='address' name='address' type='text' required />

        <label htmlFor='unit'>Apt/Suite/Unit</label>
        <input id='unit' name='unit' type='text' required /><br />

        <label htmlFor='city'>City</label>
        <input id='city' name='city' type='text' required />

        <label htmlFor='state'>State</label>
        <input id='state' name='state' type='text' required />

        <label htmlFor='zipcode'>Zipcode</label>
        <input id='zipcode' name='zipcode' type='text' required />
      </form>
    );
  }
}

export default AddressForm;
