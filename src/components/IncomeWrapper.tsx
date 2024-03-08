import { useState } from "react";
import { IncomeForm } from "./IncomeForm";

export function IncomeWrapper() {
  type Income = {
    id: number;
    source: string;
    amount: number;
    date: string;
  };

  // states
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { value, name } = e.target; //destructuring (take name and value form target)
    setIncome({
      ...income,
      [name]: value, //dynamically assign value to name of field
    });
  };

  const handleChangeDate = (value) => {
    setIncome({
      ...income,
      date: new Date(value.$d).toLocaleDateString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      id: Number(new Date()),
      source: income.source,
      amount: income.amount,
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);
    console.log(newIncome);
  };

  return (
    <>
      <IncomeForm
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
