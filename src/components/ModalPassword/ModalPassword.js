import React, { useContext, useState, useEffect } from "react";

import useStyles from "./style";

import { Button, TextField } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import api from "../../services/api";
import UserContext from "../../context/UserContext";
import { Alert } from "@mui/material";

export function ModalPassword({ user, profile }) {
  const styles = useStyles();
  const { token } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changePass = async () => {
    const headers = {
      headers: {
        token: token,
      },
    };

    if (newPass.length < 6 || oldPass.length < 6) {
      setError("A senha deve conter 6 caracteres");
      return;
    }

    const resp = await api.post(
      "password/" + user.id,
      { oldPass, newPass },
      headers
    );

    if (resp.data.error) {
      setError(resp.data.error);
      setTimeout(() => {
        setError("");
      }, 1200);
    }

    if (resp.data.sucess) {
      setSucess(resp.data.sucess);

      setTimeout(() => {
        handleClose();
      }, 1200);
    }
  };

  const changePassByAdmin = async () => {
    const headers = {
      headers: {
        token: token,
      },
    };

    if (newPass.length < 6) {
      setError("A senha deve conter 6 caracteres");
      return;
    }

    const resp = await api.post("admin/" + user.id, { newPass }, headers);

    if (resp.data.error) {
      setError(resp.data.error);

      setTimeout(() => {
        setError("");
      }, 1200);
    }

    if (resp.data.sucess) {
      setSucess(resp.data.sucess);

      setTimeout(() => {
        handleClose();
      }, 1200);
    }
  };

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<VpnKeyIcon />}
        onClick={handleClickOpen}
        className={styles.button}
      >
        Atualizar Senha
      </Button>

      {profile.id === user.id ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Atualize a sua senha</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Senha antiga"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setOldPass(e.target.value)}
            />

            <TextField
              margin="dense"
              id="name"
              label="Nova senha"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setNewPass(e.target.value)}
            />
          </DialogContent>

          {error && <Alert severity="error">{error}</Alert>}
          {sucess && <Alert severity="success">{sucess}</Alert>}

          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={changePass}>Enviar</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Atualize a senha do user: {user.name}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nova senha"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setNewPass(e.target.value)}
            />
          </DialogContent>

          {error && <Alert severity="error">{error}</Alert>}
          {sucess && <Alert severity="success">{sucess}</Alert>}

          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={changePassByAdmin}>Enviar</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
