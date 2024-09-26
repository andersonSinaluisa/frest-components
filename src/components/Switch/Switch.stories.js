
import React from 'react';
import Switch from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label:'range',
     color: 'primary',
     isSquared:false
  },
};

export const Default = {
 args: {
    label:'range',
    color: 'primary',
    isSquared:false

  },
}

export const Success = {
   args: {
    label:'range',
    color: 'success',
    isSquared:false

  },
}

export const Squared = {
  args: {
    label:'range',
    color: 'success',
    isSquared:true

  },
}