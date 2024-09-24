import React from 'react';
import BasicTextArea from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/BasicTextArea',
  component: BasicTextArea,
  args: {
    label: 'BasicTextArea',
  },
};

export const Default = {
  args: {
    label: 'BasicTextArea',
    id: 'checkbox',
    onChange: fn()
  }
}

export const Disabled = {
  args: {
    label: 'BasicTextArea',
    id: 'checkbox',
    disabled: true,
    onChange: fn()
  }
}