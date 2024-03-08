import { Label } from "@mui/icons-material";
import { Grid, colors } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function IncomeForm({ handleChange, handleChangeDate, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} md={3}>
          <TextField
            label="Income Source"
            variant="outlined"
            name="source"
            id="source"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            label="Income Amount"
            variant="outlined"
            name="amount"
            id="amount"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker name="date" onChange={handleChangeDate} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" type="submit">
            Add income
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
