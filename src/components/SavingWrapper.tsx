import { ChangeEvent } from "react";

import {
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

type SavingWrapperProbs = {
  setSavingsTarget: (key: number) => void;
  currentSaving: number;
  savingsTarget: number;
};

export function SavingWrapper({
  setSavingsTarget,
  currentSaving,
  savingsTarget,
}: SavingWrapperProbs) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSavingsTarget(Number(value));
  };

  return (
    <form>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TextField
            label="Set Target"
            variant="outlined"
            name="saving"
            id="saving"
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Button type="reset" variant="contained" color="secondary">
          Reset
        </Button>
        <Grid item xs={12} marginTop={2}>
          <Typography marginBottom={2}>
            Current Saving: {currentSaving}
          </Typography>
          <Typography marginBottom={2}>Target: {savingsTarget}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Progress: </Typography>
            <Box sx={{ width: "40%", mr: 1 }}>
              <LinearProgress variant="determinate" value={0} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                currentSaving / savingsTarget
              )}%`}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
