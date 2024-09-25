import React from 'react';
import CardHeaderFooter from './index';
import { fn } from '@storybook/test';

/*src: string;
  title: string;
  alt: string;
  subtitle: string;
  footerText: string;
  actions: {
    text: string;
    onClick: () => void;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    isOutline: boolean;
  }[]*/

export default {
  title: 'Components/CardHeaderFooter',
  component: CardHeaderFooter,
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    alt: 'Card Image',
    subtitle: 'Card Subtitle',
    footerText: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    actions: [
      {
        text: 'Primary',
        onClick: fn(),
        color: 'primary',
        isOutline: false,
      },
      {
        text: 'Secondary',
        onClick: fn(),
        color: 'secondary',
        isOutline: false,
      },
      {
        text: 'Success',
        onClick: fn(),
        color: 'success',
        isOutline: false,
      },
      {
        text: 'Danger',
        onClick: fn(),
        color: 'danger',
        isOutline: false,
      },
      {
        text: 'Warning',
        onClick: fn(),
        color: 'warning',
        isOutline: false,
      },
      {
        text: 'Info',
        onClick: fn(),
        color: 'info',
        isOutline: false,
      },
      {
        text: 'Light',
        onClick: fn(),
        color: 'light',
        isOutline: false,
      },
      {
        text: 'Dark',
        onClick: fn(),
        color: 'dark',
        isOutline: false,
      },
    ],

  },
};


export const Default = {
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    alt: 'Card Image',
    subtitle: 'Card Subtitle',
    footerText: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    actions: [
      {
        text: 'Primary',
        onClick: fn(),
        color: 'primary',
        isOutline: false,
      },
      {
        text: 'Secondary',
        onClick: fn(),
        color: 'secondary',
        isOutline: false,
      },

    ],
  }
}


export const WithoutAction = {
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    alt: 'Card Image',
    subtitle: 'Card Subtitle',
    footerText: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    actions: [],
  }
}