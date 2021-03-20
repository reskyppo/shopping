import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({
  head: {
    marginTop: theme.spacing(3),
  },
}));

const ItemList = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container mt={2} className={classes.head}>
        <Grid item xs={9}>
          Rekomendasi
        </Grid>
        <Grid item xs={3}>
          Lihat Semua
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={2} className={classes.head}>
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
