import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "../sidebar/style";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonIcon from "@mui/icons-material/Person";
export default function SidebarAvatar({ image, name, role }) {
  const styles = useStyles();
  return (
    <div className={styles.sidebar__avatar}>
      <div className={styles.sidebar__avatar__wrapper}>
        <img className={styles.sidebar__avatar__image} src={image} />
      </div>
      <Box sx={{ ml: 2 }}>
        <Typography
          sx={{ fontSize: 12, color: "#fff" }}
          className={styles.text}
        >
          Seja bem-vindo(a)
        </Typography>
        <Typography sx={{ color: "#fff" }}>{name}</Typography>
      </Box>

      <div className={styles.sidebar__perfil}>
        {role === "admin" && <VerifiedUserIcon color="primary" />}
      </div>
    </div>
  );
}
