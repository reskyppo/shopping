import React from "react";
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
const BottomNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction icon={<HomeRoundedIcon />} />
        <BottomNavigationAction icon={<FavoriteRoundedIcon />} />
        <BottomNavigationAction icon={<LocalMallRoundedIcon />} />
        <BottomNavigationAction icon={<PersonRoundedIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavbar;
