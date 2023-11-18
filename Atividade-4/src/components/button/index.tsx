import React, {ButtonHTMLAttributes} from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label:string;
    model: "primary"|"secondary";
}

const ButtonBase: React.FC<ButtonProps> = (props) => {
  return <button
    {...props}
    style={{
        background: props.model === "primary" ? "blue" :'red',
        fontWeight:'bold',
        boxShadow:'5px 5px 5px 0px rgba(0,0,0,0.15)'
    }}
  >{props.label}</button>;
}

export default ButtonBase;