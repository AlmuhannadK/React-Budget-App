import { FormEvent } from "react";

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { Controller } from "react-hook-form";

type Input = {
  type: string;
  name: string;
  id: string;
  label: string;
};

type FormProps = {
  register: any;
  onSubmit: any;
  control: any;
  handleSubmit: (e: FormEvent) => void;
  inputs: Input[];
  addLabel: string;
};

export function Form({
  // handleChange,
  register,
  handleSubmit,
  onSubmit,
  inputs,
  addLabel,
  control,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {inputs.map((input) => {
          return (
            <Grid item xs={6} md={3} key={input.id}>
              {input.type === "number" ? (
                <TextField
                  label={input.label}
                  variant="outlined"
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  {...register(input.name, {
                    valueAsNumber: true,
                  })}
                />
              ) : (
                <TextField
                  label={input.label}
                  variant="outlined"
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  {...register(input.name)}
                />
              )}
            </Grid>
          );
        })}

        <Grid item xs={6} md={3}>
          <Controller
            control={control}
            name="date"
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(date) => {
                      const value = date as Dayjs;
                      field.onChange(value.toDate().toLocaleDateString());
                    }}
                  />
                </LocalizationProvider>
              );
            }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" type="submit">
            {addLabel}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
