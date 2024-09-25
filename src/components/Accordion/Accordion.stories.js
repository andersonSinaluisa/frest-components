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
  }

}
