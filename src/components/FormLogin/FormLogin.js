import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, CircularProgress, TextField, Typography } from "@material-ui/core";
import useStyles from "../../pages/Login/style";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router";
import api from "../../services/api";
import { Alert } from "@mui/material";

export default function FormLogin() {
  const styles = useStyles();

  const { setToken } = useContext(UserContext);
  const history = useHistory();

 const [loginError, setLoginError] = useState("")
 const [loading, setLoading] = useState(false)

 

  const validationSchema = yup.object({
    email: yup
      .string("seu e-mail...")
      .email("formato de e-mail inválido")
      .required("Campo e-mail é obrigatório"),
    password: yup
      .string("sua senha...")
      .min(6, "A senhas deve conter 6 digitos")
      .required("Campo senha é obrigatória"),
  });

  async function login(email, password) {
    const response = await api.post("auth", { email, password });
    return response;
  }

  const formik = useFormik({
    initialValues: {
      email: "admin@admin.com.br",
      password: "123456",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      setLoading(true)
      const res = await login(values.email, values.password);    
      
      if(res.data.error){
        setLoginError(res.data.error)
        setLoading(false)

        return;
      }

      setToken(res.data.token);
      return history.push('/app');
    },
  });

  return (
    <>
      <Typography variant="h2">Faça Login!</Typography>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          className={styles.container__form__input}
          variant="outlined"

          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={styles.container__form__input}
          variant="outlined"

          fullWidth
          id="password"
          name="password"
          label="Senha"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        {loading &&  <CircularProgress />}

        {loginError !== "" && (
         <Alert severity="error">{loginError}</Alert>
        )}

        <Button color="primary" size="large" variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}
