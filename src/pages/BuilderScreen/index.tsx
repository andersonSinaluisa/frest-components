import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import PageBuilder from '../BuilderPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface PageComponent {
  type: string;
  props: any;
}

const componentMapType = [
  "Accordion",
  "Alert",
  "Badge",
  "BasicInput",
  "Button",
  "ButtonGroup",
  "Card",
  "CardBasic",
  "CardBody",
  "CardHeader",
  "CardHeaderFooter",
  "CardTitle",
  "Checkbox",
  "FileInput",
  "InputGroup",
  "PasswordInput",
  "Table"
];
const BuilderScreen: React.FC = () => {
  const [pageConfig, setPageConfig] = useState<PageComponent[]>([]);

  const handleAddComponent = (type: string) => {
    const newComponent: PageComponent = { type, props: {} };


    if (componentMapType.includes(type)) {
        
    }

    // Configurar props por defecto si es necesario
    if (type === 'header') {
      newComponent.props = { title: 'Nuevo Header' };
    } else if (type === 'textBlock') {
      newComponent.props = { content: 'Este es un nuevo bloque de texto' };
    } else if (type === 'imageBlock') {
      newComponent.props = { src: 'https://via.placeholder.com/150', alt: 'Imagen placeholder' };
    } else if (type === 'footer') {
      newComponent.props = { text: 'Nuevo Footer' };
    }

    setPageConfig([...pageConfig, newComponent]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={styles.container}>
        <Sidebar />
        <PageBuilder pageConfig={pageConfig} onAddComponent={handleAddComponent} />
      </div>
    </DndProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
};

export default BuilderScreen;
