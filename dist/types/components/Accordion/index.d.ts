import React from 'react';
export interface AccordionProps {
    items: {
        title: string;
        icon?: () => React.ReactNode;
        render: () => React.ReactNode;
    }[];
    id?: string;
}
declare const Accordion: (props: AccordionProps) => React.JSX.Element;
export default Accordion;
