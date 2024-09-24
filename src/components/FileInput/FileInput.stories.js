

import React from 'react';
import FileInput from './index';
import { fn } from '@storybook/test';
// Datos de ejemplo para la tabla

export default {
  title: 'Components/FileInput',
  component: FileInput,
  args: {
    label: 'Archivo',
    id: 'file',
    helperText: 'Seleccione un archivo',
  },
};

export const Default = {
  args: {
    label: 'Archivo',
    id: 'file',
    helperText: 'Seleccione un archivo',
    onChange: fn(
      (e) => {
        console.log(e.target.files);
      })

  }
}
