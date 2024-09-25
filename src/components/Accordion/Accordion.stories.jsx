import React from 'react';
import Accordion from './index';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    items: [
      {
        title: 'Item 1',
        render: fn()
      },
      {
        title: 'Item 2',
        render: fn()
      },
      {
        title: 'Item 3',
        render: fn()
      }
    ]
  },
};

export const Default = {
  args: {
    items: [
      {
        title: 'Item 1',
        render: () => <div>Item 1</div>
      },
      {
        title: 'Item 2',
        render: () => <div>Item 2</div>
      },
      {
        title: 'Item 3',
        render: () => <div>Item 3</div>
      }
    ]
  }

}


export const WithIcon = {
  args: {
    items: [
      {
        title: 'Item 1',
        icon: () => <i className="bx bx-user"></i>,
        render: () => <div>Item 1</div>
      },
      {
        title: 'Item 2',
        icon: () => <i className="bx bx-user"></i>,
        render: () => <div>Item 2</div>
      },
      {
        title: 'Item 3',
        icon: () => <i className="bx bx-user"></i>,
        render: () => <div>Item 3</div>
      }
    ]
  }
}
