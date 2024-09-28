import React from 'react';
import { useDrag } from 'react-dnd';


export const ComponentsAvaliable =  [
  {
    type: 'Accordion', label:'Acordeon',
    
  },
  {
    type: 'Alert', label:'Alerta',
    
  },
  {
    type: 'Badge', label:'Insignia',
    
  },
  {
    type: 'BasicInput', label:'Entrada de texto',
    
  },
  {
    type: 'Button', label:'Boton',
    
  },
  {
    type: 'ButtonGroup', label:'Grupo de Botones',
    
  },
  {
    type: 'Card', label:'Tarjeta',
    
  },
  {
    type: 'CardBasic', label:'Tarjeta Basica',
    
  },
  {
    type: 'CardBody', label:'Cuerpo de Tarjeta',
    
  },
  {
    type: 'CardHeader', label:'Encabezado de Tarjeta',
    
  },
  {
    type: 'CardHeaderFooter', label:'Encabezado y Pie de Tarjeta',
    
  },
  {
    type: 'CardTitle', label:'Titulo de Tarjeta',
    
  },
  {
    type: 'Checkbox', label:'Casilla de verificación',
    
  },
  {
    type: 'FileInput', label:'Entrada de archivo',
    
  },
  {
    type: 'InputGroup', label:'Grupo de Entradas',
    
  },
  {
    type: 'PasswordInput', label:'Entrada de contraseña',
    
  },
  {
    type: 'Table', label:'Tabla',
    
  },

  
]


interface SidebarItemProps {
  type: string;
  label: string;
}
const SidebarItem = ({ type, label }: SidebarItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={drag}
      style={{
        ...styles.listItem,
        opacity: isDragging ? 0.5 : 1,
      } as React.CSSProperties}
    >
      {label}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h3>Componentes Disponibles</h3>
      <ul style={styles.list}>
        {ComponentsAvaliable.map((component, index) => (
          <SidebarItem key={index} type={component.type} label={component.label} />
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ddd',
    height: '100vh'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#ddd',
    marginBottom: '10px',
    borderRadius: '5px',
    textAlign: 'center'
  }
};

export default Sidebar;
