import React, { useContext, useState, useEffect } from "react";

import useStyles from "./style";
import {
  Button,
  CircularProgress,
  Fab,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";

import { useFormik } from "formik";
import * as yup from "yup";

import SendIcon from "@mui/icons-material/Send";
import UserContext from "../../context/UserContext";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import api from "../../services/api";
import { Alert } from "@mui/material";
import { useHistory } from "react-router";

import { ModalPassword } from "../ModalPassword/ModalPassword";

export function FormUpdate({ user, profile }) {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
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
  });

  const enableReinitialize = true;

  const formik = useFormik({
    enableReinitialize,
    initialValues: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    onSubmit: async (values) => {
      try {
        const res = await update(values);

        if (res.sucess) {
          setMessage(res.sucess);
          setTimeout(() => {
            history.push("/app");
          }, 1200);
        }
      } catch (error) {
        setError(error);
      }
    },
  });

  async function update({ name, email, role }) {
    const data = { name, email, role };

    const headers = {
      headers: { token: token },
    };

    const response = await api.put(`user/${user.id}`, data, headers);
    return response.data;
  }

  return (
    <>
      <Typography className={styles.form__title} variant="h4">
        Atualizar cadastro
      </Typography>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          className={styles.user__form__input}
          variant="outlined"
          fullWidth
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Nome</InputAdornment>
            ),
          }}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className={styles.user__form__input}
          variant="outlined"
          disabled
          fullWidth
          id="email"
          name="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">E-mail</InputAdornment>
            ),
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {profile.role === "admin" && (
          <FormControl component="fieldset">
            <FormLabel component="legend">Perfil</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="role"
              value={formik.values.role === "admin" ? "admin" : "user"}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="admin"
              />
              <FormControlLabel value="user" control={<Radio />} label="user" />
            </RadioGroup>
          </FormControl>
        )}

        {loading && <CircularProgress />}

        <div className={styles.form__buttons}>
          <Button
            color="primary"
            startIcon={<SendIcon />}
            variant="contained"
            type="submit"
            className={styles.button}
          >
            Enviar
          </Button>

          <ModalPassword />
        </div>

        {message && (
          <Alert className={styles.message} severity="success">
            {message}
          </Alert>
        )}
        {error && (
          <Alert className={styles.message} severity="success">
            {error}
          </Alert>
        )}
      </form>
    </>
  );
}