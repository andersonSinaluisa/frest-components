import React from 'react';
import Accordion from './index';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    items: [
      {
        title: 'Item 1',
        render: () => <p>Item 1</p>
      },
      {
        title: 'Item 2',
        render: () => <p>Item 2</p>
      },
      {
        title: 'Item 3',
        render: () => <p>Item 3</p>
      }
    ]
  },
};

export const Default = {
  args: {
    items: [
      {
        title: 'Item 1',
        render: () => <p>Item 1</p>
      },
      {
        title: 'Item 2',
        render: () => <p>Item 2</p>
      },
      {
        title: 'Item 3',
        render: () => <p>Item 3</p>
      }
    ]
  }

}
