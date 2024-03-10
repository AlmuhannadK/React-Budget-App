import { ChangeEvent, FormEvent, useState } from "react";

import { Dayjs } from "dayjs";

import { Form } from "./Form";
import { ListItems } from "./ListItems";

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const EXPENSE_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Expense Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Expense Amount",
  },
];

export function ExpenseWrapper() {
  // states
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expense, setExpense] = useState<Expense>({
    id: Number(new Date()),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; //destructuring (take name and value form target)
    setExpense({
      ...expense,
      [name]: value, //dynamically assign value to name of field
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setExpense({
        ...expense,
        date: value.toDate().toLocaleTimeString(),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: Number(new Date()),
      source: expense.source,
      amount: Number(expense.amount),
      date: expense.date,
    };
    setExpenses([...expenses, newExpense]);
    console.log(expenses);
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        inputs={EXPENSE_INPUTS}
      />

      <ListItems items={expenses} />
    </>
  );
}
