import { useState } from "react";
import "./App.css";
import { InputDefault } from "./components/inputs";
import TextExit from "./components/textExit";

function App() {
  const [state, setState] = useState("");

  return (
    <div style={{ width: "500px" }}>
      <InputDefault
        label="Nome"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Digite o nome do usuário"
      />
      <TextExit
        text={"Passsando via props"}
        textSecondary="Controle de estados"
      />
      <TextExit text={state} textSecondary="Controle de estados" />
    </div>
  );
}

export default App;
