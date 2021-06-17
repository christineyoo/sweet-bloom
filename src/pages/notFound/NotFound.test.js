import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';

it('renders NotFound UI as expected', () => {
  const tree = renderer.create(<NotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
