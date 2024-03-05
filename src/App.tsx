import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IncomeForm } from "./components/IncomeForm";
function App() {
  let title = "Learning React Library";

  const fixedList = ["hello", "SDA", "Bootcamp"];

  const handleClick = () => {
    title = "Pressed the button";
    console.log(title);
  };

  return (
    <div className="App">
      <h1>Budget App</h1>
      <IncomeForm />
    </div>
  );
}

export default App;
