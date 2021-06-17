import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Cart from './Cart';

it('renders Cart UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Cart />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});