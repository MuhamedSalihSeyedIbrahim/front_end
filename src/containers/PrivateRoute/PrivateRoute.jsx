import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <>
      <Header {...props} />
      <Route
        {...props}
        render={(props) =>
          true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/SignIn",
              }}
            />
          )
        }
      />
    </>
  );
};
export default PrivateRoute;
