import React from "react";
import Calculator from "./components/Calculator";
import "./App.scss";

const interest = 3.5;

function App() {
  return (
    <div className="App">
      <Calculator interest={interest} />
    </div>
  );
}

export default App;
