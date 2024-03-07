import { Label } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DatePicker";

export function IncomeForm({
  handleChangeIncomeSource,
  handleChangeIncomeAmount,
  handleChangeIncomeDate,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          id="filled-basic"
          label="Income Source"
          variant="filled"
          name="incomeSource"
          onChange={handleChangeIncomeSource}
        />
      </div>
      <div>
        <TextField
          id="filled-basic"
          label="Income Amount"
          variant="filled"
          name="incomeAmount"
          onChange={handleChangeIncomeAmount}
        />
      </div>
      <div>
        <label htmlFor="incomeDate">Income Date</label>
        <input
          type="date"
          name="incomeDate"
          id="incomeDate"
          title="date"
          onChange={handleChangeIncomeDate}
        />
      </div>
      <Button variant="contained" color="success" type="submit">
        Add income
      </Button>
    </form>
  );
}
