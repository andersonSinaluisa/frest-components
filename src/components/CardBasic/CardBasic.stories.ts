import React from 'react';
import CardBasic from './index';
import { fn } from '@storybook/test';


export default {
  title: 'Components/CardBasic',
  component: CardBasic,
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    haveAction: true,
    actionText: 'Go somewhere',
    onClick: fn(),
    colorAction: 'primary',
    isOutline: false,
  },
};

export const Default = {
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    haveAction: true,
    actionText: 'Go somewhere',
    onClick: () => alert('clicked'),
    colorAction: 'primary',
    isOutline: false,
  }
}

export const Outline = {
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    haveAction: true,
    actionText: 'Go somewhere',
    onClick: () => alert('clicked'),
    colorAction: 'primary',
    isOutline: true,
  }
}

export const WithoutAction = {
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    haveAction: false,
    actionText: 'Go somewhere',
    onClick: () => alert('clicked'),
    colorAction: 'primary',
    isOutline: false,
  }
}

export const WithDifferentColor = {
  args: {
    src: 'https://picsum.photos/200/200',
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    haveAction: true,
    actionText: 'Go somewhere',
    onClick: () => alert('clicked'),
    colorAction: 'danger',
    isOutline: false,
  }
}


