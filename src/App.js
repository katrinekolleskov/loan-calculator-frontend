import React from "react";
import Calculator from "./components/Calculator";
import "./App.scss";

function App() {
  const interest = 3.5;
  return (
    <div className="App">
      <Calculator interest={interest} />
    </div>
  );
}

export default App;
