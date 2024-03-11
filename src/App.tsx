import { FormEvent, useState } from "react";

import { Grid, Typography } from "@mui/material";

import "./App.css";
import { Income, IncomeWrapper } from "./components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "./components/ExpenseWrapper";
import { SavingWrapper } from "./components/SavingWrapper";
import { TransferAmountWrapper } from "./components/TransferAmountWrapper";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingsTarget, setSavingsTarget] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferError, setTransferError] = useState("");

  let totalIncome: number = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });

  let totalExpense: number = 0;
  expenses.forEach((expense) => {
    totalExpense += expense.amount;
  });

  const balance: number = totalIncome - totalExpense - currentSaving;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (transferAmount <= balance) {
      // some outcome, but guarantees recent state value --> setCurrentSaving(currentSaving + transferAmount);
      setCurrentSaving((prevState: number) => {
        return prevState + transferAmount;
      });
      setTransferError("");
    } else {
      setTransferError("Insufficient funds for transaction");
    }
    setTransferAmount(0);
  };

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
          <SavingWrapper
            setSavingsTarget={setSavingsTarget}
            currentSaving={currentSaving}
            savingsTarget={savingsTarget}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={10}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Typography marginBottom={2}>Current Balance: {balance}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TransferAmountWrapper
            setTransferAmount={setTransferAmount}
            handleSubmit={handleSubmit}
            transferAmount={transferAmount}
          />
        </Grid>
        <Grid item xs={12}>
          {transferError && (
            <Typography color="error" textAlign={"center"}>
              {transferError}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
