import React from 'react';
import Card from './index';
import { fn } from '@storybook/test';


export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children: () => <p>
      Some quick example text to build on the card title and make up the bulk of the card content.
    </p>
  },
};

export const Default = {
  args: {
    children: <p>
      Some quick example text to build on the card title and make up the bulk of the card content.
    </p>
  }
}