import { ChangeEvent, FormEvent, useState } from "react";

import { Dayjs } from "dayjs";

import { Form } from "./Form";
import { ListItems } from "./ListItems";

export type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const INCOME_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Income Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Income Amount",
  },
];

export function IncomeWrapper() {
  // states
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [income, setIncome] = useState<Income>({
    id: Number(new Date()),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; //destructuring (take name and value form target)
    setIncome({
      ...income,
      [name]: value, //dynamically assign value to name of field
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setIncome({
        ...income,
        date: value.toDate().toLocaleTimeString(),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newIncome: Income = {
      id: Number(new Date()),
      source: income.source,
      amount: Number(income.amount),
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);
    console.log(incomes);
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        inputs={INCOME_INPUTS}
      />

      <ListItems items={incomes} />
    </>
  );
}
