import React, { useState } from "react";
import "./App.css";
import { IncomeWrapper } from "./components/IncomeWrapper";
function App() {
  return (
    <div className="App">
      <h1>Budget App</h1>
      <IncomeWrapper />
    </div>
  );
}

export default App;
