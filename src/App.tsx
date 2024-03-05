import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IncomeForm } from "./components/IncomeForm";
function App() {
  type Income = {
    source: string;
    amount: number;
    date: string;
  };
  // easier way, but requires a lot of writing
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [source, setSource] = useState("");
  // Need to work on these two like "source"
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);

  /* functions to handle events and change states */
  const handleChangeIncomeSource = (e) => {
    // saving the value of change in a variable
    const value = e.target.value;
    // save the value into the new state of source
    setSource(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED FORM ...");
    // new object to store into array
    const newIncome = {
      source: source,
      amount: 100,
      date: new Date().toLocaleDateString(),
    };
    // add to the income array after submission
    setIncomes([...incomes, newIncome]);
  };
  return (
    <div className="App">
      <h1>Budget App</h1>
      {/* passing probs to this component */}
      <IncomeForm
        handleChangeIncomeSource={handleChangeIncomeSource}
        handleSubmit={handleSubmit}
      />
      <ul>
        {incomes.map((income) => {
          return (
            <li>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
