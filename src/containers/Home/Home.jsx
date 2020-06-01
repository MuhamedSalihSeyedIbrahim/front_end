import React, { Component } from "react";

import "./Home.css";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Home);
