import React from 'react';
import { useDrop } from 'react-dnd';
import {
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
} from '../../index'

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


interface PageBuilderProps {
  pageConfig: Array<{ type: string; props: any }>;
  onAddComponent: (type: string) => void;
}



const PageBuilder: React.FC<PageBuilderProps> = ({ pageConfig, onAddComponent }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item: { type: string }) => {
      onAddComponent(item.type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        ...styles.pageBuilder,
        backgroundColor: isOver ? '#e0ffe0' : '#fff',
      }}
    >
      {pageConfig.map((block, index) => {
        const Component = componentMap[block.type as keyof typeof componentMap];
        return Component ? <Component key={index} {...block.props} /> : null;
      })}
    </div>
  );
};

const styles = {
  pageBuilder: {
    padding: '20px',
    backgroundColor: '#fff',
    width: '100%',
    minHeight: '100vh',
    border: '2px dashed #ddd',
  } as React.CSSProperties,
};

export default PageBuilder;
