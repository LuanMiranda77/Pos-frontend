import React from "react";
import "./style.css";
import logado from "../../assets/logado.png"
import { IoMenu } from "react-icons/io5";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="flex mr-2">
        <i><IoMenu /></i>
        <span>Dashboard</span>
      </div>
      <img src={logado} alt="logo" width={'30px'} height={"30px"} />
    </nav>
  );
};

export default NavBar;
