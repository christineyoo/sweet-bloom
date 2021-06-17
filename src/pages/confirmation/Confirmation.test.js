import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Confirmation from './Confirmation';

it('renders Confirmation UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Confirmation />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
