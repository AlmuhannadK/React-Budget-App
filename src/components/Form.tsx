import { ChangeEvent, FormEvent } from "react";

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

type Input = {
  name: string;
  id: string;
  label: string;
};

type FormProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (value: Dayjs | null) => void;
  handleSubmit: (e: FormEvent) => void;
  inputs: Input[];
};

export function Form({
  handleChange,
  handleChangeDate,
  handleSubmit,
  inputs,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {inputs.map((input) => {
          return (
            <Grid item xs={6} md={3} key={input.id}>
              <TextField
                label={input.label}
                variant="outlined"
                name={input.name}
                id={input.id}
                onChange={handleChange}
              />
            </Grid>
          );
        })}

        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker name="date" onChange={handleChangeDate} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
