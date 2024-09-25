import React from 'react';
import ButtonGroup from './index';
import { fn } from '@storybook/test';


export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  args: {
    items: [
      {
        children: 'Button 1',
        color: 'primary',
        onClick: fn()
      },
      {
        children: 'Button 2',
        color: 'secondary',
        onClick: fn()
      }
    ]
  },
};

export const Default = {
  args: {
    items: [
      {
        children: 'Button 1',
        color: 'primary',
        onClick: fn()
      },
      {
        children: 'Button 2',
        color: 'secondary',
        onClick: fn()
      },
      {
        children: 'Button 3',
        color: 'success',
        onClick: fn()
      },
      {
        children: 'Button 4',
        color: 'danger',
        onClick: fn()
      },

    ]
  }
}


export const Outline = {
  args: {
    items: [
      {
        children: 'Button 1',
        color: 'primary',
        onClick: fn(),
        isOutline: true,
        isLabel: true
      },
      {
        children: 'Button 2',
        color: 'secondary',
        onClick: fn(),
        isOutline: true

      },
      {
        children: 'Button 3',
        color: 'success',
        onClick: fn(),
        isOutline: true
      },
      {
        children: 'Button 4',
        color: 'danger',
        onClick: fn(),
        isOutline: true
      }
    ]
  }
}