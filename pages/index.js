import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import BottomNavbar from "../src/components/BottomNavbar";
import Carousel from "../src/components/Carousel";
import ItemList from "../src/components/ItemList";
import Search from "../src/components/Search";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: { marginBottom: "55px" },
});

export default function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.main}>
        <Search />
        <Carousel />
        <ItemList />
      </Box>
      <BottomNavbar />
    </Container>
  );
}
