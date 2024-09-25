import React from 'react';
import Button from './index';
import { fn } from '@storybook/test';


export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    color: 'primary'
  },
};

export const Default = {
  args: {
    children: 'Button',
    color: 'primary'
  }
}

export const Primary = {
  args: {
    children: 'Primary Button',
    color: 'primary'
  }
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    color: 'secondary'
  }
}

export const Success = {
  args: {
    children: 'Success Button',
    color: 'success'
  }
}

export const Danger = {
  args: {
    children: 'Danger Button',
    color: 'danger'
  }
}

export const Warning = {
  args: {
    children: 'Warning Button',
    color: 'warning'
  }
}

export const Info = {
  args: {
    children: 'Info Button',
    color: 'info'
  }
}

export const Light = {
  args: {
    children: 'Light Button',
    color: 'light'
  }
}

export const Dark = {
  args: {
    children: 'Dark Button',
    color: 'dark'
  }
}

export const Link = {
  args: {
    children: 'Link Button',
    color: 'link'
  }
}

export const Outline = {
  args: {
    children: 'Outline Button',
    color: 'primary',
    isOutline: true
  }
}

export const Rounded = {
  args: {
    children: 'Rounded Button',
    color: 'primary',
    isRounded: true
  }
}

export const Label = {
  args: {
    children: 'Label Button',
    color: 'primary',
    isLabel: true
  }
}

export const OutlineRounded = {
  args: {
    children: 'Outline Rounded Button',
    color: 'primary',
    isOutline: true,
    isRounded: true
  }
}

export const OutlineLabel = {
  args: {
    children: 'Outline Label Button',
    color: 'primary',
    isOutline: true,
    isLabel: true
  }
}

export const RoundedLabel = {
  args: {
    children: 'Rounded Label Button',
    color: 'primary',
    isRounded: true,
    isLabel: true
  }
}

export const OutlineRoundedLabel = {
  args: {
    children: 'Outline Rounded Label Button',
    color: 'primary',
    isOutline: true,
    isRounded: true,
    isLabel: true
  }
}



