import React, { useState, useContext } from "react";
import useStyles from "./style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../assets/images/user.png";
import UserContext from "../../context/UserContext";
import SidebarAvatar from "./components/SidebarAvatar";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function Sidebar(props) {
  const { setToken } = useContext(UserContext);
  const user = props.user;
  const styles = useStyles();
  const [state, setState] = useState(true);

  return (
    <div className={state ? styles.sidebar : styles.sidebar__close}>
      <Button onClick={() => setState(!state)}>close</Button>
      <SidebarAvatar image={image} />
      <nav className={styles.sidebar__nav}>
        <List>
          <p>seja bem vindo, {user.name}</p>
          <ListItem disablePadding>
            <ListItemButton component={Link} to={"/app"}>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              {state && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton component={Link} to={`/app/user/edit/${user.id}`}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              {state && <ListItemText primary="Minha conta" />}
            </ListItemButton>
          </ListItem>
      
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={() => setToken(false)}>
              <ListItemIcon>
                <ExitToAppIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              {state && <ListItemText sx={{ color: '#fff' }} primary="Sair" />}
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}
