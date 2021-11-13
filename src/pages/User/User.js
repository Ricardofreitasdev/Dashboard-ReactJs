import React, { useContext, useState, useEffect } from "react";

import useStyles from "./style";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import UserContext from "../../context/UserContext";
import { Alert } from "@mui/material";
import { FormUpdate } from "../../components/FormUpdate/FormUpdate";

export function User() {
  
  const styles = useStyles();
  let { id } = useParams();

  const { token } = useContext(UserContext);
  const [updatedataUser, setUpdatedataUser] = useState([]);
  const [user, setUser] = useState([]);

  const getUser = () => {
    api.get("user", { headers: { token: token } }).then((user) => {
      setUser(user.data);
    });
  };


  const getUserById = (id) => {
    api.get(`user/${id}`, { headers: { token: token } }).then((user) => {
      setUpdatedataUser(user.data);
    });
  };

  useEffect(() => {
    getUserById(id);
    getUser()
  }, []);

  return (
    <>
      {user.role === "admin" || user.id === updatedataUser.id? (
        <div className={styles.editUser}>
          <FormUpdate user={updatedataUser} profile={user}/>
      
        </div>
      ) : (
        <Alert severity="error">Ação indisponível para seu perfil!</Alert>
      )}
    </>
  );
}
