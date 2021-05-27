import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";

import Carousel from "../../src/components/Carousel";
import { Products } from "../../src/utils/data";
import BottomNavbar from "../../src/components/BottomNavbar";

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
        <div>
          {datas.map((data) => (
            <div key={data.id}>
              <Carousel datas={data.carousel} />
              <Grid container alignItems="center" className={classes.titleBar}>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h1">
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <FavoriteIcon fontSize="large" color="primary" />
                </Grid>
              </Grid>
              <Typography variant="subtitle1">{data.price}</Typography>
              <Grid container alignItems="center" className={classes.titleBar}>
                <Grid item xs={2}>
                  <Avatar alt="Store's Name" src={data.store.img} />
                </Grid>
                <Grid
                  item
                  xs={10}
                  container
                  direction="column"
                  justify="center"
                  alignItems="stretch"
                >
                  <Typography variant="h6">{data.store.name}</Typography>
                  <Typography variant="subtitle2">
                    {data.store.address}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1">Deskripsi</Typography>
              <Typography variant="body2">{data.desc}</Typography>
            </div>
          ))}
          <BottomNavbar />
        </div>
      ) : (
        <div>
          <Skeleton variant="rect" width="100%" height={250} />
          <Grid container alignItems="center" className={classes.titleBar}>
            <Grid item xs={10}>
              <Skeleton variant="text" height={40} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton variant="circle" width={40} height={40} />
            </Grid>
          </Grid>
          <Skeleton variant="text" width={120} height={40} />
          <Grid container alignItems="center" className={classes.titleBar}>
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
          <BottomNavbar />
        </div>
      )}
    </div>
  );
};

export default Product;
