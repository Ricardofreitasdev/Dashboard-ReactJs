import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import api from "../../services/api";
import useStyles from "./style";
import { Button } from "@material-ui/core";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Table from "../../components/Table/Table";

export function App() {
  const { token } = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);

  const styles = useStyles();

  const getUser = () => {
    api
      .get("user", { headers: { token: token } })
      .then((user) => setLoggedUser(user.data));
  };

  const getAllUseres = () => {
    api
      .get("all-users", { headers: { token: token } })
      .then((users) => setUsers(users.data));
  };

  useEffect(() => {
    getUser();
    getAllUseres();
  }, []);


  const usersArray = users.map(Object.values);

  
  return (
    <>
      {loggedUser.role === "admin" && (
        <Button
          className={styles.button__new}
          variant="contained"
          href="app/new"
          color="primary"
          startIcon={<PersonAddIcon />}
        >
          Criar novo usuário
        </Button>
      )}

      <Table data={usersArray} user={loggedUser} />
    </>
  );
}
