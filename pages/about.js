import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

import BottomNavbar from "../src/components/BottomNavbar";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <BottomNavbar value="account" />
      </Box>
    </Container>
  );
}
