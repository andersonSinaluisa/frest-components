import React from 'react';
import CardHeader from './index';
import { fn } from '@storybook/test';
import Card from '../Card';


export default {
  title: 'Components/CardHeader',
  component: (args) => <Card>
    <CardHeader>
      {args.children}
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


export const WithSomeElements = {
  args: {
    children: <>
      Title of the card
      <p>
        Some quick example text to build on the card title and make up the bulk of the card content.
      </p>
    </>
  }
}