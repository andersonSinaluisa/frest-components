

import React from 'react';
import Checkbox from './index';
import { fn, userEvent, within } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'primary',
    type: 'checkbox',
  },
};

export const Default = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'primary',
    onChange: fn()
  }
}
export const Radio = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'primary',
    onChange: fn(),
    type: 'radio'
  }
}

export const Checked = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'primary',
    checked: true,
    onChange: fn()
  }
}

export const Disabled = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'primary',
    disabled: true,
    onChange: fn()
  }
}

export const Primary = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'primary',
    onChange: fn(),
    checked: true,

  }
}

export const Secondary = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'secondary',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }
}

export const Success = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'success',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }
}

export const Danger = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'danger',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }
}

export const Warning = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'warning',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }

}

export const Info = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'info',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }
}

export const Dark = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'dark',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }
}

export const Light = {
  args: {
    label: 'Checkbox',
    id: 'checkbox',
    color: 'light',
    onChange: fn(),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    setTimeout(() => {
      userEvent.click(checkbox);
    }, 2000);
  }
}

