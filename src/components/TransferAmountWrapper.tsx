import { ChangeEvent } from "react";

import { Button, Grid, TextField } from "@mui/material";
import { color } from "@mui/system";

type TransferAmountProbs = {
  setTransferAmount: (key: number) => void;
};

export function TransferAmountWrapper({
  setTransferAmount,
}: TransferAmountProbs) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTransferAmount(Number(value));
  };

  return (
    <form>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TextField
            label="Transfer to Saving"
            variant="outlined"
            name="transfer"
            id="transfer"
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Button type="reset" variant="contained" color="success">
          Transfer
        </Button>
      </Grid>
    </form>
  );
}
