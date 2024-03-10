import { useState } from "react";

import { Grid } from "@mui/material";

import "./App.css";
import { Income, IncomeWrapper } from "./components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "./components/ExpenseWrapper";

function App() {
  // pass states as probs to components
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // calculate balance
  let totalIncome: number = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });
  console.log(totalIncome);

  let totalExpense: number = 0;
  expenses.forEach((expense) => {
    totalExpense += expense.amount;
  });
  console.log(totalExpense);

  /*  More Advanced Method to Calculate Total with reduce()
  
  const totalExpense = expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  */

  const balance: number = totalIncome - totalExpense;

  return (
    <div>
      <h1>React - Budget App</h1>
      <Grid container>
        <Grid item xs={6}>
          <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
        </Grid>
        <Grid item xs={6}>
          <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
        </Grid>
      </Grid>
      <h1>Balance: {balance}</h1>
    </div>
  );
}

export default App;
