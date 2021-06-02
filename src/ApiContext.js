import React from 'react';

const ApiContext = React.createContext({
  groups: [
    // {
    //   id: 1,
    //   group_name: 'Flowers'
    // },
    // {
    //   id: 2,
    //   group_name: 'Desserts'
    // }
  ],
  items: [],
  fetchItems: () => {}
});

export default ApiContext;
