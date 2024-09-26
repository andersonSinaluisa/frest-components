import React from "react";


interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText: string;
}
const FileInput = (props: FileInputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        {props.label}
      </label>
      <input className="form-control" type="file" {...props} />
      <div className="form-text">
        {props.helpText}
      </div>
      <div className="invalid-feedback text-danger">
        {props.error}
      </div>
    </div>
  )
}

export default FileInput;