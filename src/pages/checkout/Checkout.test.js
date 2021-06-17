import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Checkout from './Checkout';

it('renders Checkout UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Checkout />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
