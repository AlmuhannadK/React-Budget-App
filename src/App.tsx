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
      // some outcome, but guarantees recent state value from setter
      // --> setCurrentSaving(currentSaving + transferAmount);
      setCurrentSaving((prevState: number) => {
        return prevState + transferAmount;
      });
      setTransferError("");
    } else {
      setTransferError("Insufficient funds for transaction");
    }
    setTransferAmount(0);
  };

  const handleDeleteIncome = (id: number) => {
    const updatedIncomes = incomes.filter((income) => {
      return income.id !== id;
    });
    setIncomes(updatedIncomes);
  };

  const handleDeleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses(updatedExpenses);
  };

  const addIncomeLabel = "Add Income";
  const addExpenseLabel = "Add Expense";

  return (
    <div>
      <Typography variant="h1" textAlign={"center"} marginBlock={8}>
        React - Budget App
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            handleDelete={handleDeleteIncome}
            addLabel={addIncomeLabel}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
            handleDelete={handleDeleteExpense}
            addLabel={addExpenseLabel}
          />
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
