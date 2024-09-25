import React from "react";
interface FileInputProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helpText: string;
}
declare const FileInput: (props: FileInputProps) => React.JSX.Element;
export default FileInput;
