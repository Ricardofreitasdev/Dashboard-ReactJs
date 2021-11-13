import React, { useState } from "react";
import useStyles from "./style";

import {
    Button,
    TextField,
  } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";


export function ModalPassword() {
  const styles = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
        <Button
          color="primary"
          variant="contained"
          startIcon={<VpnKeyIcon />}
          onClick={handleClickOpen}
          className={styles.button}
        >
          Atualizar Senha
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Cadastrar nova senha</DialogTitle>
          <DialogContent>
            <DialogContentText>Insira sua senha antiga</DialogContentText>

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
      </>
    )
}
