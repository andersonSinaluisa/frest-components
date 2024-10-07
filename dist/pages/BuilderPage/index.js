import React from 'react';
import { useDrop } from 'react-dnd';
import { Accordion, Alert, Badge, BasicInput, Button, ButtonGroup, Card, CardBasic, CardBody, CardHeader, CardHeaderFooter, CardTitle, Checkbox, FileInput, InputGroup, PasswordInput, Table } from '../../index';
const componentMap = {
    Accordion,
    Alert,
    Badge,
    BasicInput,
    Button,
    ButtonGroup,
    Card,
    CardBasic,
    CardBody,
    CardHeader,
    CardHeaderFooter,
    CardTitle,
    Checkbox,
    FileInput,
    InputGroup,
    PasswordInput,
    Table
};
const PageBuilder = ({ pageConfig, onAddComponent }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'COMPONENT',
        drop: (item) => {
            onAddComponent(item.type);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    return (React.createElement("div", { ref: drop, style: {
            ...styles.pageBuilder,
            backgroundColor: isOver ? '#e0ffe0' : '#fff',
        } }, pageConfig.map((block, index) => {
        const Component = componentMap[block.type];
        return Component ? React.createElement(Component, { key: index, ...block.props }) : null;
    })));
};
const styles = {
    pageBuilder: {
        padding: '20px',
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '100vh',
        border: '2px dashed #ddd',
    },
};
export default PageBuilder;
