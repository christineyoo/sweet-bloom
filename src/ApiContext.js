import React from 'react';

const ApiContext = React.createContext({
  groups: [],
  items: [],
  fetchItems: () => {},
  fetchReviews: () => {},
  addReview: () => {},
  deleteReview: () => {},
  updateReview: () => {}
});

export default ApiContext;
