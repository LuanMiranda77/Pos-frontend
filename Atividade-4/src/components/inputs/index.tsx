import React, { InputHTMLAttributes } from "react";

// import { Container } from './styles';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  isTotalize:boolean;
}

export const InputDefault: React.FC<InputProps> = (props) => {
  return (
    <div
      className={props.className}
      style={{ width: "100%", margin: "20px 0px" }}
    >
      <p style={{ margin: "0px", padding: "0px", textAlign: "left" }}>
        {props.label}
      </p>
      <input {...props} style={{ width: "100%", height: "32px" }} />
      {props.isTotalize && <small>Este texto contém {props.value?.toString().length} caracteres</small>}
    </div>
  );
};
