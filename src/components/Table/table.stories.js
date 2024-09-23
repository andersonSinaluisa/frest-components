import React from 'react';
import Table from './index';

// Datos de ejemplo para la tabla
const data = [
  { name: 'John Doe', age: 28, country: 'USA' },
  { name: 'Jane Smith', age: 34, country: 'UK' },
];

// Definir las columnas de la tabla
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
  { key: 'country', title: 'Country' },
];

export default {
  title: 'Components/Table',
  component: Table,
  args: {
    data,
    columns,
  },
};


export const Default = {
  args: {
    data,
    columns,
  },

}