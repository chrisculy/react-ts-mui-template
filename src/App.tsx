import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export const App: React.FC = (props) => {
  return (
    <Container>
      <Typography
        variant="h3"
        display="flex"
        justifyContent="center"
        marginY={4}
      >
        React TypeScript Material UI Template Project
      </Typography>
    </Container>
  );
};
