import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
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
    padding: theme.spacing(1,1),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (<>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="textSecondary">
              {"Copyright © "}
              <Link color="inherit" to="#">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Container>
        </footer>

        </>
    );
  }
}
export default withStyles(useStyles)(Footer);
