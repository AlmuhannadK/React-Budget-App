import { Form } from "./Form";
import { ListItems } from "./ListItems";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";

const ExpenseSchema = z.object({
  source: z
    .string()
    .min(3, {
      message: "please enter min 3 characters",
    })
    .max(25),
  amount: z.number().positive({
    message: "please enter valid numbers (greater than 0)",
  }),
  date: z.string(),
});
type ExpenseSchemaType = z.infer<typeof ExpenseSchema>;

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const EXPENSE_INPUTS = [
  {
    type: "text",
    name: "source",
    id: "source",
    label: "Expense Source",
  },
  {
    type: "number",
    name: "amount",
    id: "amount",
    label: "Expense Amount",
  },
];

type ExpenseWrapperProbs = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
  handleDelete: (key: number) => void;
  addLabel: string;
};

export function ExpenseWrapper({
  expenses,
  setExpenses,
  handleDelete,
  addLabel,
}: ExpenseWrapperProbs) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ExpenseSchemaType>({ resolver: zodResolver(ExpenseSchema) });

  const onSubmit = (value: any) => {
    setExpenses([...expenses, value]);
  };

  return (
    <>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        inputs={EXPENSE_INPUTS}
        addLabel={addLabel}
      />
      {errors.source && (
        <Typography color="red">{errors.source.message}</Typography>
      )}
      {errors.amount && (
        <Typography color="red">{errors.amount.message}</Typography>
      )}
      {errors.date && (
        <Typography color="red">{errors.date.message}</Typography>
      )}

      <ListItems items={expenses} handleDelete={handleDelete} />
    </>
  );
}
