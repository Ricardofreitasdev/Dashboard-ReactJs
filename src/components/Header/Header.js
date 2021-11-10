import React, { useState, useContext } from "react";
import useStyles from "./style";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListItemButton from "@mui/material/ListItemButton";
import UserContext from "../../context/UserContext";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LayoutContext from "../../context/LayoutContext";

export default function Header() {
  const styles = useStyles();

  const { setToken } = useContext(UserContext);
  const { sidebar, setSidebar } = useContext(LayoutContext);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <ListItemButton
            disableGutters
            alignItems="center"
            sx={{ mr:2, padding: 1 }}
            className={styles.header__menu}
            onClick={() => setSidebar(!sidebar)}
          >
            <MenuIcon />
          </ListItemButton>
          <Typography variant="h4">Dashboard</Typography>
        </div>
        <div id="teste" className={styles.header__listIcons}>
          <ListItemButton onClick={() => setToken(false)}>
            <ExitToAppIcon className={styles.white} />
          </ListItemButton>
        </div>
      </nav>
    </header>
  );
}
