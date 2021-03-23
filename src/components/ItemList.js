import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({
  head: {
    marginTop: theme.spacing(3),
  },
  typography: {
    fontSize: 15,
  },
}));

const ItemList = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.head}>
        <Grid item xs={9}>
          <Typography variant="h6">Rekomendasi</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.head}>
        <Grid item xs={6}>
          <ItemCard />
        </Grid>
        <Grid item xs={6}>
          <ItemCard />
        </Grid>
        <Grid item xs={6}>
          <ItemCard />
        </Grid>
        <Grid item xs={6}>
          <ItemCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemList;
