import { ChangeEvent, FormEvent, useState } from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dayjs } from "dayjs";

import { Form } from "./Form";
import { ListItems } from "./ListItems";
import { Typography } from "@mui/material";

const IncomeSchema = z.object({
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
type IncomeSchemaType = z.infer<typeof IncomeSchema>;

export type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const INCOME_INPUTS = [
  {
    type: "text",
    name: "source",
    id: "source",
    label: "Income Source",
  },
  {
    type: "number",
    name: "amount",
    id: "amount",
    label: "Income Amount",
  },
];

type IncomeWrapperProbs = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
  handleDelete: (key: number) => void;
  addLabel: string;
};

export function IncomeWrapper({
  incomes,
  setIncomes,
  handleDelete,
  addLabel,
}: IncomeWrapperProbs) {
  // states
  // const [income, setIncome] = useState<Income>({
  //   id: Number(new Date()),
  //   source: "",
  //   amount: 0,
  //   date: new Date().toLocaleDateString(),
  // });

  //react hook form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IncomeSchemaType>({ resolver: zodResolver(IncomeSchema) });

  const onSubmit = (data: any) => {
    setIncomes([...incomes, data]);
  };

  return (
    <>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        inputs={INCOME_INPUTS}
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

      <ListItems items={incomes} handleDelete={handleDelete} />
    </>
  );
}
