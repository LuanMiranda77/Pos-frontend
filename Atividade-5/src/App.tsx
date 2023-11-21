/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import ListTask from "./components/listTask";
import NavBar from "./components/navBar";

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState(new Array<string>("Primeiro valor"));

  return (
    <div>
      <NavBar />
      <div className="m-2" style={{ width: "50%" }}>
        <ListTask dataSource={data} setDataSource={setData} />
      </div>
    </div>
  );
}

export default App;
