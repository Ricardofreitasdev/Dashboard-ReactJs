import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "../sidebar/style";

export default function SidebarAvatar(props) {
  const image = props.image;
  const name = props.user;

  const styles = useStyles();
  return (
    <div className={styles.sidebar__avatar}>
      <div className={styles.sidebar__avatar__wrapper}>
        <img className={styles.sidebar__avatar__image} src={image} />
      </div>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontSize: 12, color: "#fff" }} className={styles.text}>Seja bem-vindo(a)</Typography>
        <Typography sx={{ color: "#fff" }} >{name}</Typography>
      </Box>
    </div>
  );
}
