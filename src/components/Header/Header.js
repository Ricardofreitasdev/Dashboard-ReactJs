import React from 'react'
import useStyles from "./style";

export default function Header() {
  const styles = useStyles();

    return (
        <header className={styles.header}>
            <div>Dashboard</div>
            <div>icones</div>
        </header>
    )
}
