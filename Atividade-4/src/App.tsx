/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { InputDefault } from "./components/inputs";
import Login from "./components/login";
import logado from "./assets/logado.png"
import notlog from "./assets/notlog.png"

function App() {
  const [state, setState] = useState("");
  const [stateLogin, setStateLogin] = useState(false);
  const images=[logado, notlog];

  return (
    <div style={{ width: "500px" }}>
      <InputDefault
        label="Nome"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Digite o nome do usuário"
        maxLength={30}
        isTotalize
      />
      <div className="card">
        <Login image={images} setValue={setStateLogin} value={stateLogin}/>
      </div>
    </div>
  );
}

export default App;
