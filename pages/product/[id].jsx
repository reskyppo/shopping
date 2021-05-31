import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

// MUI Core
import {
  Box,
  Grid,
  Avatar,
  Button,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
// MUI Accordion
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
// MUI styles
import { makeStyles, withStyles } from "@material-ui/core/styles";
// MUI Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// MUI lab
import Skeleton from "@material-ui/lab/Skeleton";
// MUI color
import { pink, grey } from "@material-ui/core/colors";
// Internal import
import Carousel from "../../src/components/Carousel";
import Search from "../../src/components/Search";
import { Products, Carts } from "../../src/utils/data";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    marginTop: theme.spacing(1),
  },
  main: { marginBottom: "60px" },
  loveIcon: {
    textAlign: "center",
  },
  header: {
    marginTop: "-8px",
  },
  btn: {
    width: "100%",
    height: "55px",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
  },

  btnHeader: {
    marginTop: "8px",
  },
}));

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "0",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "0px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Product = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const [isLoaded, setIsLoaded] = useState(false);
  const [expanded, setExpanded] = useState("panel1");
  const [isFavorited, setIsFavorited] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const datas = Products.filter((product) => product.id == id);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div className={classes.main}>
          <Grid container alignItems="center" className={classes.header}>
            <Grid item xs={2}>
              <IconButton aria-label="back" className={classes.btnHeader}>
                <Link href="/">
                  <KeyboardBackspaceIcon />
                </Link>
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              <Search />
            </Grid>
            <Grid item xs={2}>
              <Box ml="1rem">
                <Badge
                  badgeContent={Carts.length}
                  color="primary"
                  className={classes.btnHeader}
                >
                  <ShoppingCartIcon />
                </Badge>
              </Box>
            </Grid>
          </Grid>
          {datas.map((data) => (
            <div key={data.id}>
              <Carousel datas={data.carousel} />
              <Box px="0.5rem">
                <Grid
                  container
                  alignItems="center"
                  className={classes.titleBar}
                >
                  <Grid item xs={10}>
                    <Typography variant="h5" component="h1">
                      {data.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Box>
                      <IconButton
                        aria-label="delete"
                        onClick={() => setIsFavorited(!isFavorited)}
                        style={{ color: isFavorited ? pink[500] : grey[500] }}
                      >
                        <FavoriteIcon fontSize="large" />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="subtitle1">{data.price}</Typography>
                <Grid
                  container
                  alignItems="center"
                  className={classes.titleBar}
                >
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
                <Accordion
                  square
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography>Deskripsi</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.desc}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </div>
          ))}

          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.btn}
          >
            Beli Sekarang
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Product;