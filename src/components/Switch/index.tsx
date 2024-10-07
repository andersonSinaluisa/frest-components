import React, { InputHTMLAttributes } from "react";


interface SwitchProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    withIcon?:boolean
    positiveIcon?:React.ReactNode;
    negativeIcon?:React.ReactNode;
    isSquared: boolean
    size_?:'lg'|'sm'|'default'
}
const Switch = (props: SwitchProps)=>{
  return(
   <label className={`switch switch-${props.color} ${props.isSquared?"switch-square":""} 
   switch-${props.size_}
   `}>
    <input type="checkbox" className="switch-input" {...props}/>
    <span className="switch-toggle-slider">
      {
        props.withIcon &&<>
        <span className="switch-on">
        {props.positiveIcon}
      </span>
      <span className="switch-off">
        {props.negativeIcon}
      </span>
        
        </>
      }
      
    </span>
    <span className="switch-label">Success</span>
  </label>
  )
}

export default Switch