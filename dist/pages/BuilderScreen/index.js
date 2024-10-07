import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import PageBuilder from '../BuilderPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
const BuilderScreen = () => {
    const [pageConfig, setPageConfig] = useState([]);
    const handleAddComponent = (type) => {
        const newComponent = { type, props: {} };
        // Configurar props por defecto si es necesario
        if (type === 'header') {
            newComponent.props = { title: 'Nuevo Header' };
        }
        else if (type === 'textBlock') {
            newComponent.props = { content: 'Este es un nuevo bloque de texto' };
        }
        else if (type === 'imageBlock') {
            newComponent.props = { src: 'https://via.placeholder.com/150', alt: 'Imagen placeholder' };
        }
        else if (type === 'footer') {
            newComponent.props = { text: 'Nuevo Footer' };
        }
        setPageConfig([...pageConfig, newComponent]);
    };
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement("div", { style: styles.container },
            React.createElement(Sidebar, null),
            React.createElement(PageBuilder, { pageConfig: pageConfig, onAddComponent: handleAddComponent }))));
};
const styles = {
    container: {
        display: 'flex',
    },
};
export default BuilderScreen;
