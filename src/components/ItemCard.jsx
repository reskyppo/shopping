import React from "react";
import Link from "next/link";

// import material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  action: {
    width: "100%",
  },
});

export default function ItemCard({ id, name, img, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent>
          <Typography noWrap gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" className={classes.action}>
          <Link href={`/product/${id}`}>
            <Typography gutterBottom variant="subtitle1">
              Buy
            </Typography>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
