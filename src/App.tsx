import { useState } from "react";

import { Grid, Typography } from "@mui/material";

import "./App.css";
import { Income, IncomeWrapper } from "./components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "./components/ExpenseWrapper";
import { SavingWrapper } from "./components/SavingWrapper";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingsTarget, setSavingsTarget] = useState(0);

  console.log("savingsTarget: ", savingsTarget);
  // calculate balance
  let totalIncome: number = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });

  let totalExpense: number = 0;
  expenses.forEach((expense) => {
    totalExpense += expense.amount;
  });

  const balance: number = totalIncome - totalExpense;

  /*  More Advanced Method to Calculate Total with reduce()
  
  const totalExpense = expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  */

  return (
    <div>
      <h1>React - Budget App</h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SavingWrapper setSavingsTarget={setSavingsTarget} />
        </Grid>
      </Grid>
      <Typography>Balance: {balance}</Typography>
    </div>
  );
}

export default App;
