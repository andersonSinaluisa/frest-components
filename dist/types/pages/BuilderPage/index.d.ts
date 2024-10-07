import React from 'react';
interface PageBuilderProps {
    pageConfig: Array<{
        type: string;
        props: any;
    }>;
    onAddComponent: (type: string) => void;
}
declare const PageBuilder: React.FC<PageBuilderProps>;
export default PageBuilder;
