/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SvgIcon from "@material-ui/core/SvgIcon";

import StockForm from "../../components/StockForm/StockForm";

const useStyles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
class Stock extends Component {
  render() {
    const { classes, location } = this.props;
    const title = location.pathname.split("/").join(" ").toUpperCase();
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <div className={classes.paper}>
          <HomeIcon fontSize="large" />
          {/* <Typography component="h1" variant="h5">
            {title}
          </Typography> */}
          <StockForm
            updateButtonName={title.indexOf("ADD") !== -1 ? "ADD" : "UPDATE"}
          />
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Stock);
