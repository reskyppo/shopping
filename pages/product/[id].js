import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Carousel from "../../src/components/Carousel";
import { Products } from "../../src/utils/data";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    marginTop: theme.spacing(1),
  },
  typography: {
    fontSize: 15,
  },
}));

const Product = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const datas = Products.filter((product) => product.id == id);
  console.log("a", datas);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoaded ? (
        datas.map((dat) => (
          <div key={dat.id}>
            <p>{dat.name}</p>
          </div>
        ))
      ) : (
        <div>
          <Skeleton variant="rect" width="100%" height={250} />
          <Grid
            container
            alignItems="center"
            spacing={3}
            className={classes.titleBar}
          >
            <Grid item xs={10}>
              <Skeleton variant="text" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton variant="circle" width={40} height={40} />
            </Grid>
          </Grid>
          <Skeleton variant="text" width={120} height={40} />
          <Grid
            container
            alignItems="center"
            spacing={3}
            className={classes.titleBar}
          >
            <Grid item xs={2}>
              <Skeleton variant="circle" width={60} height={60} />
            </Grid>
            <Grid
              item
              xs={10}
              container
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={40} />
            </Grid>
          </Grid>
          <Skeleton variant="text" height={40} />
          <Skeleton variant="rect" width="100%" height={250} />
        </div>
      )}
    </div>
  );
};

export default Product;
