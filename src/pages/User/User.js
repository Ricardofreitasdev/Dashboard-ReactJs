import React, { useContext, useState, useEffect } from "react";

import useStyles from "./style";
import { useParams } from "react-router-dom";
import { Button, CircularProgress, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import api from "../../services/api";
import UserContext from "../../context/UserContext";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SendIcon from '@mui/icons-material/Send';

export function User() {
  const styles = useStyles();
  let { id } = useParams();
  const { token } = useContext(UserContext);

  const [loading, setLoading] = useState(false)
  const [updatedataUser, setUpdatedataUser] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api
      .get(`user/${id}`, { headers: { token: token } })
      .then((user) => setUpdatedataUser(user.data));
  }, []);

 
  
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

  const initialValues = {
    name: updatedataUser.name,
    email: updatedataUser.email,
    password: "",
  }

  const formik = useFormik({    
    initialValues,
    enableReinitialize,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

    },
  });

  return(
    <>
    <Typography variant="h2">Atualizar dados</Typography>
    <form onSubmit={formik.handleSubmit}>
    <TextField
        className={styles.container__form__input}
        fullWidth
        id="name"
        name="name"
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        className={styles.container__form__input}
        fullWidth
        id="email"
        name="email"
        label="E-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      {loading &&  <CircularProgress />}

      <Button color="primary" startIcon={<SendIcon/>} variant="contained" type="submit">
        Enviar
      </Button>
    </form>

    <div>
      <Button color="primary"  variant="contained" startIcon={<VpnKeyIcon/>} onClick={handleClickOpen}>
       Atualizar Senha
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar nova senha</DialogTitle>
        <DialogContent>

          <DialogContentText>
           Insira sua senha antiga
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Senha antiga"
            type="text"
            fullWidth
            variant="standard"
          />

     
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nova senha"
            type="email"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  </>
  );
}
