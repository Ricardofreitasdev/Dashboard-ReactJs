import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";
import { Route, Switch } from "react-router-dom";
import api from "../../services/api";
import Sidebar from "../../components/sidebar/sidebar";
import { App } from "../App/App";
import { User } from "../User/User";

import UserContext from "../../context/UserContext";

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
          <Route path="/app/user/edit/:id" component={User} />
          <Route path="/app" component={App} />
        </Switch>
      </div>
    </div>
  );
}
