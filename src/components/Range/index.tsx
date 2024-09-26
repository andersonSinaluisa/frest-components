
interface RangeProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
}

const Range = (props:RangeProps)=>{


  const {label, className, ...rest} = props;
  return(
    <div class="mb-3">
      <label for="formRange1" class="form-label">{props.label}</label>
      <input type="range" class={"form-range "+className} {...rest}/>
    </div>
  )
}

export default Range;