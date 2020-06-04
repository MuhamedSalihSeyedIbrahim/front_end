import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import routes from "../../route";
import History from "../../configs/History";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const onClick = (path, logout = false) => {
    if (logout) {
      //logout Operation
    }
    History.push(path);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        style={{ display: "flex", flexDirection: "rowRreverse", width: "100%" }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {routes.map(({ path, name, access, icon: Icon, visibility }, index) =>
            access === "PRIVATE" ? (
              <ListItem button key={index} style={{ visibility: visibility }}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={name}
                  key={index}
                  color="inherit"
                  path={path}
                  onClick={(e) => onClick(path)}
                />
              </ListItem>
            ) : (
              ""
            )
          )}
          <div></div>
        </List>
        <Divider />
      </div>{" "}
      <ListItem button style={{ display: "flex", marginTop: "auto" }}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText
          style={{ display: "flex", marginLeft: "auto" }}
          primary={"logout"}
          key={routes.length + 1}
          color="inherit"
          path={"/SignIn"}
          onClick={(e) => onClick("/SignIn", true)}
        />
      </ListItem>
    </>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            style={{ cursor: "default" }}
          >
            FARM APP
          </Typography>
          <IconButton
            style={{ display: "flex", marginLeft: "auto" }}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
