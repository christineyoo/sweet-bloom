import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';

it('renders Landing UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Landing />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
