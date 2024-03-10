import React, { useState } from "react";

import { Grid } from "@mui/material";

import "./App.css";
import { IncomeWrapper } from "./components/IncomeWrapper";
import { ExpenseWrapper } from "./components/ExpenseWrapper";

function App() {
  return (
    <div>
      <h1>React - Budget App</h1>
      <Grid container>
        <Grid item xs={6}>
          <IncomeWrapper />
        </Grid>
        <Grid item xs={6}>
          <ExpenseWrapper />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
