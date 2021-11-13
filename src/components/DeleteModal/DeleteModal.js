import React, { useContext, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStyles from "./style";
import api from "../../services/api";
import { Alert } from "@mui/material";
import { createBrowserHistory } from "history";
import UserContext from "../../context/UserContext";
import identifyId from "../../utils/identifyId";

export function DeleteModal({ selectedRows, displayData }) {
  const styles = useStyles();
  const { token } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [deleted, setdeleted] = React.useState();
  const [errors, setErrors] = React.useState(false);
  const history = createBrowserHistory();

  const deleteUser = (Row, Data) => {
    const id = identifyId(Row, Data);

    api.delete(`delete/${id}`, { headers: { token: token } }).then((res) => {
      if (res.data === 1) {
        setdeleted(true);

        setTimeout(() => {
          setOpen(false);
          history.go(0);
        }, 1000);

        return;
      }
      if (res.data.error) {
        setErrors(res.data.error);
        setTimeout(() => {
          setOpen(false);
          history.go(`/app`);
        }, 1000);

        return;
      }
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={styles.button}
        onClick={handleClickOpen}
        variant="contained"
        startIcon={<DeleteForeverIcon />}
      >
        Excluir usuário
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.modal}
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja realmente excluir esse usuário?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação é irreversível
            {errors && <Alert severity="error">Você não pode se excluir</Alert>}
            {deleted && (
              <Alert severity="success">Usuario excluído com sucesso</Alert>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" id="cancel" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="text"
            id="delete"
            onClick={() => deleteUser(selectedRows, displayData)}
            autoFocus
          >
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
