import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormRegister from "../../components/FormRegister/FormRegister";
import FormLogin from "../../components/FormLogin/FormLogin";
import  LoginImage  from "../../assets/images/login.svg"

export function Login() {
  const styles = useStyles();

  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <Grid container className={styles.container}>
      <div className={styles.container__image}>
         <img alt="imagem de login" src={LoginImage} />
      </div>
      <div className={styles.container__form}>
        <div className={styles.container__form__wrapper}>

          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            color=""
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
