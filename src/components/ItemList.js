import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import { Products } from "../utils/data";

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
        {Products?.map((product, idx) => (
          <Grid item xs={6} key={idx}>
            <ItemCard
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
