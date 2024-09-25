import React from 'react';
import CardBody from './index';
import { fn } from '@storybook/test';
import Card from '../Card';


export default {
  title: 'Components/CardBody',
  component: (args) => <Card>
    <CardBody>
      {args.children}
    </CardBody>
  </Card>,
  args: {
    children: <>
      Some quick example text to build on the card title and make up.
    </>
  },
};

export const Default = {
  args: {
    children: <>
      Some quick example text to build on the card title and make up.
    </>
  }
}

export const WithSomeElements = {
  args: {
    children: <>
      Some quick example text to build on the card title and make up.
      <p>
        Some quick example text to build on the card title and make up the bulk of the card content.
      </p>
    </>
  }
}