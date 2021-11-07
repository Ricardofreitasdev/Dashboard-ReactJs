import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Layout } from "../pages/Layout/Layout";
import { Login } from "../pages/Login/Login";

export default function Routes() {
  const { token } = useContext(UserContext);

  const RoutesPrivate = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() =>
          token ? <Component {...rest} /> : <Redirect to="/login" />
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/app" component={Layout} />

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
