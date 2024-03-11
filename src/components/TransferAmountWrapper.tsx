import { ChangeEvent, FormEvent } from "react";

import { Button, Grid, TextField } from "@mui/material";

type TransferAmountProbs = {
  setTransferAmount: (key: number) => void;
  handleSubmit: (key: FormEvent) => void;
  transferAmount: number;
};

export function TransferAmountWrapper({
  setTransferAmount,
  handleSubmit,
  transferAmount,
}: TransferAmountProbs) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTransferAmount(Number(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} marginBottom={2}>
          <TextField
            label="Transfer to Saving"
            variant="outlined"
            name="transfer"
            id="transfer"
            type="number"
            value={transferAmount}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            style={{ height: "100%" }}
          >
            Transfer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
