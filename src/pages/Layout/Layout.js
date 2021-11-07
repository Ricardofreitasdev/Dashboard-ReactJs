import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";
import { App } from "../Home/App";
import { Route, Switch } from "react-router-dom";
import UserContext from "../../context/UserContext";
import api from "../../services/api";
import Sidebar from "../../components/sidebar/sidebar";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export function Layout() {
  const styles = useStyles();
  const { token } = useContext(UserContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get("user", { headers: { token: token } })
      .then((user) => setUser(user.data));
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar user={user} />
      <div className={styles.container}>
        <Switch>
          <Route path="/app" component={App} />
          <Route path="/app/user" component={App} />
        </Switch>
      </div>
    </div>
  );
}
