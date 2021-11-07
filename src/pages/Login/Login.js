import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";

export function Login() {
  const styles = useStyles();

  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <Grid container className={styles.container}>
      <div className={styles.container__image}>imagem</div>
      <div className={styles.container__form}>
        <div className={styles.container__form__wrapper}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="Login" />
            <Tab label="Cadastro" />
            
          </Tabs>
          {activeTabId === 0 && <FormLogin />}
          {activeTabId === 1 && <FormRegister />}
        </div>
      </div>
    </Grid>
  );
}
