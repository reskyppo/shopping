import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
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
const BottomNavbar = ({ value }) => {
  const classes = useStyles();

  return (
    <BottomNavigation value={value} className={classes.root}>
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
