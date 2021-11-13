import React from 'react'
import FormRegister from '../../components/FormRegister/FormRegister'
import useStyles from "./style";

export default function NewUser() {
  const styles = useStyles();

    return (
        <div className={styles.newUser}>
            <FormRegister type="complete"/>
        </div>
    )
}
