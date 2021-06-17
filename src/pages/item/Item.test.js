import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Item from './Item';

it('renders Item UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Item />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
