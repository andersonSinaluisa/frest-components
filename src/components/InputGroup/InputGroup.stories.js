
import React from 'react';
import InputGroup from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  args: {
    text: '@',
    onChange: fn(() => console.log('onChange')),
    id: 'input-group',
  },
};

export const Default = {
  args: {
    text: '@',
    onChange: fn(() => console.log('onChange')),
    id: 'input-group',
  }
}
