
import React from 'react';
import PasswordInput from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  args: {
    text: 'Ingrese su contraseña',
    onChange: fn(() => console.log('onChange')),
    id: 'input-group',
    onShowPassword: () => fn(),
    showPassword: false,
  },
};

export const Default = {
  args: {
    text: 'Ingrese su contraseña',
    onChange: fn(() => console.log('onChange')),
    id: 'input-group',
    onShowPassword: () => fn(),
    showPassword: false,
  }
}
