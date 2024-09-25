import React from 'react';
import Badge from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla
/*
interface BadgeProps {
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  children: React.ReactNode
  isRounded: boolean
  isLabel: boolean
  classes?: string

}
*/
export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    color: 'primary',
    children: 'Primary',
    isRounded: false,
    isLabel: false,
    classes: ''
  },
};

export const Primary = {
  args: {
    color: 'primary',
    children: 'Primary',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Secondary = {
  args: {
    color: 'secondary',
    children: 'Secondary',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Success = {
  args: {
    color: 'success',
    children: 'Success',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}


export const Danger = {
  args: {
    color: 'danger',
    children: 'Danger',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Warning = {
  args: {
    color: 'warning',
    children: 'Warning',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Info = {
  args: {
    color: 'info',
    children: 'Info',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Light = {
  args: {
    color: 'light',
    children: 'Light',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Dark = {
  args: {
    color: 'dark',
    children: 'Dark',
    isRounded: false,
    isLabel: false,
    classes: ''
  }
}

export const Rounded = {
  args: {
    color: 'primary',
    children: 'Rounded',
    isRounded: true,
    isLabel: false,
    classes: ''
  }
}

export const Label = {
  args: {
    color: 'primary',
    children: 'Label',
    isRounded: false,
    isLabel: true,
    classes: ''
  }
}

