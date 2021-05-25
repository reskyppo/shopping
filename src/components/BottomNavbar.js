import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import Context from "../utils/Context";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "55px",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
  },
});
const BottomNavbar = ({ history }) => {
  const classes = useStyles();

  return (
    <Context.Consumer>
      {(context) => (
        <BottomNavigation
          value={context.value}
          onChange={(event, newValue) => {
            context.changeValue(newValue);
          }}
          className={classes.root}
        >
          <BottomNavigationAction
            value="home"
            icon={<HomeRoundedIcon />}
            href="/"
          />
          <BottomNavigationAction
            value="favorite"
            icon={<FavoriteRoundedIcon />}
          />
          <BottomNavigationAction
            value="cart"
            icon={<LocalMallRoundedIcon />}
          />
          <BottomNavigationAction
            value="account"
            icon={<PersonRoundedIcon />}
            href="/about"
          />
        </BottomNavigation>
      )}
    </Context.Consumer>
  );
};

export default BottomNavbar;
