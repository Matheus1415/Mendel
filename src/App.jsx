// src/App.js
import React, { useState } from "react";
import ParentInput from "./components/ParentInput";
import PunnettSquare from "./components/PunnettSquare";
import "./App.css";

const App = () => {
  const [parents, setParents] = useState([]);

  return (
    <div className="App">
      <h1>Punnett Square Generator</h1>
      <ParentInput setParents={setParents} />
      <PunnettSquare parents={parents} />
    </div>
  );
};

export default App;
