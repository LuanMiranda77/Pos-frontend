/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ButtonBase from "../button";
import { InputDefault } from "../inputs";

// import { Container } from './styles';
interface LoginProps {
  image: Array<string>;
  value: boolean;
  setValue: Function;
}
const Login: React.FC<LoginProps> = (props) => {
  const userStateInit = { name: "", password: "" };
  const [user, setUser] = useState(userStateInit);
  const [error, setError] = useState(false);
  const login = () => {
    if (Boolean(user.name) == false || Boolean(user.password) == false) {
      return setError(true);
    }
    props.setValue(true);
    setError(false);
    setUser(userStateInit);
  };
  return (
    <div>
      <p style={{ color: "red" }}>
        {error && "Os campos nome e senha são obrigatórios"}
      </p>
      <p>
        {!props.value
          ? "Acesso ao sistema"
          : "Bem vindo ao sistema PROGRAMADOR!"}
      </p>
      <img
        src={!props.value ? props.image[1] : props.image[0]}
        alt="logo"
        width={"100px"}
      />
      {!props.value && (
        <div>
          <InputDefault
            label="Nome"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Digite o nome do usuário"
            isTotalize={false}
          />
          <InputDefault
            label="Senha"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Digite a senha"
            isTotalize={false}
            type="password"
          />
        </div>
      )}
      <div style={{marginTop:'5px'}}>
        {!props.value ? (
          <ButtonBase label="Logar" model="primary" onClick={login} />
        ) : (
          <ButtonBase
            label="Logout"
            model="secondary"
            onClick={() => props.setValue(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
