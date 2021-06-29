// MUI lab
import { Grid, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    marginTop: theme.spacing(1),
  },
}));

const Lazyload = () => {
  const classes = useStyles();

  return (
    <div>
      <Skeleton variant="rect" width="100%" height={250} />
      <Skeleton variant="text" height={40} />
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
    </div>
  );
};

export default Lazyload;
