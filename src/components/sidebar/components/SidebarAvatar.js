import React from "react";
import useStyles from "../style";

export default function SidebarAvatar(props) {
    const image = props.image
    const styles = useStyles();
  return (
      <div className={styles.sidebar__avatar}>
        <div className={styles.sidebar__avatar__wrapper}>
          <img
            className={styles.sidebar__avatar__image}
            src={image}
          />
        </div>
      </div>
 
  );
}
