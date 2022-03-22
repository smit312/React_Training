// import { AppBar, Toolbar, Typography, makeStyles } from "@mui/material";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});
const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink to="/" className={classes.tabs}>
          SmitDevloper
        </NavLink>
        <NavLink to="/all" className={classes.tabs}>
          All Users
        </NavLink>
        <NavLink to="add" className={classes.tabs}>
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
