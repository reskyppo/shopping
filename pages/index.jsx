import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import BottomNavbar from "../src/components/BottomNavbar.jsx";
import Carousel from "../src/components/Carousel.jsx";
import ItemList from "../src/components/ItemList.jsx";
import Search from "../src/components/Search.jsx";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: { marginBottom: "55px" },
});

export default function Index() {
  const classes = useStyles();
  const imgBanner = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];
  return (
    <Container className={classes.root}>
      <Box className={classes.main}>
        <Search />
        <Carousel banner datas={imgBanner} />
        <ItemList />
      </Box>
      <BottomNavbar value="home" />
    </Container>
  );
}
