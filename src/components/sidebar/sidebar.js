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
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/app/user">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {state && <ListItemText primary="Ver perfil" />}
            </ListItemButton>
          </ListItem>

          <Divider />
          {user.role === 'admin' && (
              <p>admin</p>
          )}
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={() => setToken(false)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {state && <ListItemText primary="Sair" />}
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}
