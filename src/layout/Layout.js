import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";
import { Route, Switch } from "react-router-dom";
import api from "../services/api";
import Sidebar from "../components/sidebar/sidebar";
import { App } from "../pages/App/App";
import { User } from "../pages/User/User";

import UserContext from "../context/UserContext";
import Header from "../components/Header/Header";

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
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>

          {/* Aqui são exibidas as pages*/}
          <Switch>
            <Route path="/app/user/edit/:id" component={User} />
            <Route path="/app" component={App} />
          </Switch>

        </div>
      </div>
    </div>
  );
}
