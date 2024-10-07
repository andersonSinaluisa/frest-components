import { InputHTMLAttributes } from "react";

interface RangeProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
}

const Range = (props:RangeProps)=>{


  const {label, className, ...rest} = props;
  return(
    null
  )
}

export default Range;