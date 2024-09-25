import React from 'react';
import Dropdown from './index';
import { fn, userEvent, within } from '@storybook/test';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: 'Dropdown',
      color: 'primary',
      type: 'button',
    }
  },
};

export const Default = {
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: 'Dropdown',
      color: 'primary',
      type: 'button',
    }
  },
}

export const DirectionUp = {
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: 'Dropdown',
      color: 'success',
      type: 'button',
    },
    direction: 'up'
  },
}

export const Success = {
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: 'Dropdown',
      color: 'success',
      type: 'button',
    }
  },
}


export const Danger = {
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: 'Dropdown',
      color: 'danger',
      type: 'button',
    }
  },
}

export const Outline = {
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: 'Dropdown',
      color: 'outline-primary',
      type: 'button',
    }
  },
}


export const WithIcon = {
  args: {
    items: [
      {
        children: 'Action',
        onClick: fn(),
      },
      {
        children: 'Another action',
        onClick: fn(),
      },
      {
        children: 'Something else here',
        onClick: fn(),
      },
      {
        isDivider: true,
      },
      {
        children: 'Separated link',
        onClick: fn(),
      },
      {
        isDivider: true,
      }
    ],
    button: {
      children: <i className="bx bx-dots-vertical-rounded"></i>,
      color: 'outline-primary',
      type: 'button',
      isRounded: true,
      isWithIcon: true
    }
  }
}
