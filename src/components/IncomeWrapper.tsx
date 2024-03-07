import { useState } from "react";
import { IncomeForm } from "./IncomeForm";

export function IncomeWrapper() {
  type Income = {
    id: number;
    source: string;
    amount: number;
    date: string;
  };
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);

  const handleChangeIncomeSource = (e) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChangeIncomeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  const handleChangeIncomeDate = (e) => {
    const value = e.target.value;
    setDate(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED FORM ...");
    const newIncome = {
      id: Number(new Date()),
      source: source,
      amount: amount,
      date: date,
    };
    setIncomes([...incomes, newIncome]);
    console.log(newIncome);
  };

  return (
    <>
      <IncomeForm
        handleChangeIncomeSource={handleChangeIncomeSource}
        handleChangeIncomeAmount={handleChangeIncomeAmount}
        handleChangeIncomeDate={handleChangeIncomeDate}
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
