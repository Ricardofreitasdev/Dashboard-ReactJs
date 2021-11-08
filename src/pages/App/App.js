import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import api from "../../services/api";
import useStyles from "./style";
import Table from "./components/Table";
import { Button } from "@material-ui/core";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export function App() {

  const { token } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  
  const styles = useStyles();


  useEffect(() => {
    api
      .get("user", { headers: { token: token } })
      .then((user) => setLoggedUser(user.data));

    api
      .get("all-users", { headers: { token: token } })
      .then((users) => setUsers(users.data));
  }, []);

  const usersArray = users.map(Object.values);

  return (
    <>
      {loggedUser.role === 'admin' && (
        <Button
        variant="contained" 
        href="app/new"
        color="primary"
        startIcon={<PersonAddIcon />}
        size="large"

        >Criar novo usuário</Button>
      )}
      <Table data={usersArray} user={loggedUser}/>
    </>
  );
}