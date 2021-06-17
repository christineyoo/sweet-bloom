import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Shop from './Shop';

it('renders Shop UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Shop />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});