import React from 'react';
import Alert from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla
/*interface AlertProps {
  title: string
  message: string
  isCloseable: boolean
  onClose: () => void
  icon: React.ReactNode
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  isSolid: boolean
}*/
const defaultvalues = {
  title: 'Alerta',
  message: 'Mensaje de alerta',
  isCloseable: true,
  onClose: fn(),
  icon: <i className="fas fa-exclamation-triangle"></i>,
  color: 'primary',
  isSolid: true
}
export default {
  title: 'Components/Alert',
  component: Alert,
  args: defaultvalues
};

export const Primary = {
  args: {
    ...defaultvalues,
    color: 'primary'
  },
}

export const Secondary = {
  args: {
    ...defaultvalues,
    color: 'secondary'
  },
}


export const Success = {
  args: {
    ...defaultvalues,
    color: 'success'
  },
}

export const Danger = {
  args: {
    ...defaultvalues,
    color: 'danger'
  },
}

export const Warning = {
  args: {
    ...defaultvalues,
    color: 'warning'
  },
}

export const Info = {
  args: {
    ...defaultvalues,
    color: 'info'
  },
}

export const Light = {
  args: {
    ...defaultvalues,
    color: 'light'
  },
}

export const Dark = {
  args: {
    ...defaultvalues,
    color: 'dark'
  },
}

export const Solid = {
  args: {
    ...defaultvalues,
    isSolid: true
  },
}

export const NotSolid = {
  args: {
    ...defaultvalues,
    isSolid: false
  },
}

export const NotCloseable = {
  args: {
    ...defaultvalues,
    isCloseable: false
  },
}
