import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SignIn from "../src/components/SignIn";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={8}>
        <SignIn />
      </Box>
    </Container>
  );
}
