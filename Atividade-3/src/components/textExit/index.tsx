import React from "react";

// import { Container } from './styles';
interface TextProps {
  text: string;
  textSecondary: string;
}
const TextExit: React.FC<TextProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "#fdfdfd",
        borderRadius: "10px",
        height: "150px",
        margin:'20px 0px'
      }}
    >
      <p style={{ color: "#1c1c1c", fontWeight: "bold" }}>
        Login: {props.text}
      </p>
      <p style={{ color: "#1c1c1c", fontWeight: "bold" }}>
        Texto secondario: {props.textSecondary}
      </p>
    </div>
  );
};

export default TextExit;
