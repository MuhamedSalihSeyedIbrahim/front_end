import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import history from "../src/configs/History";

import routes from "./route";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import "./App.css";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.pageNotFound.bind(this);
  }

  pageNotFound() {
    return <Redirect to="/SignIn" />;
  }

  render() {
    const { classes } = this.props;
    let headerTabHighLightValue = 0;

    return (
      <div className={classes.root}>
        <Router history={history}>
          <Switch>
            {routes.map(
              ({ path, component: ComponentTag, _name, access }, index) =>
                access === "PUBLIC" ? (
                  <Route
                    key={index}
                    path={path}
                    render={(props) => <ComponentTag {...props} />}
                  />
                ) : (
                  <PrivateRoute
                    headerTabHighLightValue={headerTabHighLightValue++}
                    key={index}
                    path={path}
                    component={ComponentTag}
                    {...this.props}
                  />
                )
            )}
            <Route
              key={routes.length + 1}
              {...this.props}
              component={this.pageNotFound}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
