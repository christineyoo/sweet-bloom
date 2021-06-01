import React from 'react';

const ApiContext = React.createContext({
  groups: [
    {
      id: 1,
      group_name: 'Flowers'
    },
    {
      id: 2,
      group_name: 'Desserts'
    }
  ],
  items: [
    {
      id: 1,
      item_name: 'Roses are Red',
      item_price: 40,
      item_description:
        'What better way to wow that special person with a timeless gift of red roses? Express how much that person means to you by gifting a dozen red roses.',
      item_url: 'https://imgur.com/THhJyTk',
      group_id: 1
    }
  ],
  fetchItems: () => {}
});

export default ApiContext;
