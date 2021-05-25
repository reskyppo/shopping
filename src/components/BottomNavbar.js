import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
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
    <BottomNavigation value="home" className={classes.root}>
      <BottomNavigationAction
        value="home"
        icon={<HomeRoundedIcon />}
        href="/"
      />
      <BottomNavigationAction value="favorite" icon={<FavoriteRoundedIcon />} />
      <BottomNavigationAction value="cart" icon={<LocalMallRoundedIcon />} />
      <BottomNavigationAction
        value="account"
        icon={<PersonRoundedIcon />}
        href="/about"
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
