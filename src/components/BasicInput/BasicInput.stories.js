import React from 'react';
import BasicInput from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/BasicInput',
  component: BasicInput,
  args: {
    type: 'text',
    helpText: 'Ingresa tu usuario',
    id: 'text',
    label: 'Usuario'
  },
};

export const Default = {
  args: {
    type: 'text',
    helpText: 'Ingresa tu usuario',
    id: 'text',
    label: 'Usuario',
    onChange: fn()
  }

}

export const Error = {

  args: {
    type: 'text',
    error: 'Ingresa tu usuario',
    id: 'text',
    label: 'Usuario',
    onChange: fn()
  }
}


export const Email = {

  args: {
    type: 'email',
    helpText: 'Ingresa tu correo',
    label: 'Correo'
  }
}