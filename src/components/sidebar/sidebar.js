import React, { useState, useContext } from "react";
import useStyles from "./style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SidebarAvatar from "../Avatar/SidebarAvatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { createBrowserHistory } from "history";


import UserContext from "../../context/UserContext";
import LayoutContext from "../../context/LayoutContext";

export default function Sidebar(props) {
  const history = createBrowserHistory(); 
  const { setToken } = useContext(UserContext);
  const { sidebar, setSidebar } = useContext(LayoutContext);

  const user = props.user;
  const styles = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };



  return (
    <>
      <div
        onClick={() => setSidebar(!sidebar)}
        className={sidebar === true ? styles.sidebar__closer : ""}
      ></div>
      <div
        className={sidebar === true ? styles.sidebar__mobile : styles.sidebar}
      >
        <SidebarAvatar image={user.avatar} name={user.name} role={user.role} />

        <Divider />
        <nav className={styles.sidebar__nav}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                to={'/app'}
                component={Link}
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}              
              >
                <ListItemIcon>
                  <SupervisorAccountIcon className={styles.white} />
                </ListItemIcon>
                <ListItemText className={styles.white} primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
              <ListItemButton
                component={Link}              
                to={`/app/user/edit/${user.id}`}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <PersonIcon className={styles.white} />
                </ListItemIcon>

                <ListItemText className={styles.white} primary="Minha conta" />
              </ListItemButton>
            </ListItem>

            <Divider />

            {user.role === "admin" && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to={`/app/new`}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemIcon>
                      <PersonAddIcon className={styles.white} />
                    </ListItemIcon>

                    <ListItemText
                      className={styles.white}
                      primary="Criar usuário"
                    />
                  </ListItemButton>
                </ListItem>

                <Divider />
              </>
            )}

            <ListItem disablePadding>
              <ListItemButton onClick={() => setToken(false)}>
                <ListItemIcon>
                  <ExitToAppIcon className={styles.white} />
                </ListItemIcon>

                <ListItemText className={styles.white} primary="Sair" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </div>
    </>
  );
}
