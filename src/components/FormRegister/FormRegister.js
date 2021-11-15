import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import useStyles from "./style";
import api from "../../services/api";
import { Alert } from "@mui/material";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router";

export default function FormRegister({ type }) {
  const styles = useStyles();
  const [loginError, setLoginError] = useState("");
  const [message, setMessage] = useState("");

  const { setToken } = useContext(UserContext);
  const history = useHistory();

  const validationSchema = yup.object({
    email: yup
      .string("seu e-mail...")
      .email("formato de e-mail inválido")
      .required("Campo e-mail é obrigatório"),
    password: yup
      .string("sua senha...")
      .min(6, "A senhas deve conter 6 digitos")
      .required("Campo senha é obrigatória"),
    name: yup
      .string("sseu nome...")
      .min(3, "Seu nome deve no minimo 3 letras")
      .required("Campo nome é obrigatório"),
  });

  const RegisterFormik = useFormik({
    initialValues: {
      name: "Seu nome",
      email: "seu@email.com",
      password: "123456",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await createUser(values.name, values.email, values.password);

      if (res.data.error) {
        setLoginError(res.data.error);
        return;
      }

      if (type === "complete") {
        setMessage(true);

        setTimeout(() => {
          history.push("/app");
        }, 1200);
      } else {
        setToken(res.data.token);
        return history.push("/app");
      }
    },
  });

  async function createUser(name, email, password) {
    const response = await api.post("create", { name, email, password });
    return response;
  }

  return (
    <>
      {type === "complete" ? (
        <Typography className={styles.form__title} variant="h4">Cadastrar novo usuario!</Typography>
      ) : (
        <Typography variant="h3">Cadastre-se!</Typography>
      )}
      <form
        className={type !== "complete" ? styles.form : styles.form__complete}
        onSubmit={RegisterFormik.handleSubmit}
      >
        <TextField
          className={styles.container__form__input}
          fullWidth
          variant="outlined"
          id="name"
          name="name"
          label="Nome"
          value={RegisterFormik.values.name}
          onChange={RegisterFormik.handleChange}
          error={
            RegisterFormik.touched.name && Boolean(RegisterFormik.errors.name)
          }
          helperText={RegisterFormik.touched.name && RegisterFormik.errors.name}
        />
        <TextField
          className={styles.container__form__input}
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          label="E-mail"
          value={RegisterFormik.values.email}
          onChange={RegisterFormik.handleChange}
          error={
            RegisterFormik.touched.email && Boolean(RegisterFormik.errors.email)
          }
          helperText={
            RegisterFormik.touched.email && RegisterFormik.errors.email
          }
        />
        <TextField
          className={styles.container__form__input}
          fullWidth
          variant="outlined"
          id="password"
          name="password"
          label="Senha"
          type="text"
          value={RegisterFormik.values.password}
          onChange={RegisterFormik.handleChange}
          error={
            RegisterFormik.touched.password &&
            Boolean(RegisterFormik.errors.password)
          }
          helperText={
            RegisterFormik.touched.password && RegisterFormik.errors.password
          }
        />

        {loginError !== "" && <Alert severity="error">{loginError}</Alert>}
        {message && (
          <Alert severity="success">Usuario criado com sucesso!</Alert>
        )}

        <Button
          className={styles.button}
          color="primary"
          variant="contained"
          type="submit"
          size="large"
        >
          Cadastrar
        </Button>
      </form>
    </>
  );
}
