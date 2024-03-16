import { Link } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import "./Welcome.css";

const label: string = "start here";

export function Welcome() {
  return (
    <div className="Welcome-header">
      <Typography variant="h1" marginBlock={8}>
        Welcome to My React Budget App
      </Typography>
      <Button variant="contained" color="info">
        <Link to={"/budget-app"}>{label}</Link>
      </Button>
    </div>
  );
}
