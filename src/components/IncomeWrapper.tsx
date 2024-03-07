import { useState } from "react";
import { IncomeForm } from "./IncomeForm";

export function IncomeWrapper() {
  type Income = {
    source: string;
    amount: number;
    date: string;
  };
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  //const [date, setDate] = useState(null);

  const handleChangeIncomeSource = (e) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChangeIncomeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED FORM ...");
    const newIncome = {
      source: source,
      amount: amount,
      date: new Date().toLocaleDateString(),
    };
    setIncomes([...incomes, newIncome]);
    console.log(newIncome);
  };

  return (
    <>
      <IncomeForm
        handleChangeIncomeSource={handleChangeIncomeSource}
        handleChangeIncomeAmount={handleChangeIncomeAmount}
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
    </>
  );
}
