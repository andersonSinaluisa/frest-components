import React from 'react';
import CardTitle from './index';
import { fn } from '@storybook/test';
import CardHeader from '../CardHeader';
import Card from '../Card';


export default {
  title: 'Components/CardTitle',
  component: (args) => <Card>
    <CardHeader>
      <CardTitle>{args.children}</CardTitle>
    </CardHeader>
  </Card>,
  args: {
    children: () => <>
      Title of the card
    </>
  },
};

export const Default = {
  args: {
    children: <>
      Title of the card
    </>
  }
}
