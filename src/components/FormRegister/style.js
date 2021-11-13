import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    container__form__input: {
        marginBottom: '15px',
        marginTop: '15px'
     },
     container__form: {
        width: "40%",
        height: "100vh",
        [theme.breakpoints.down('sm')]: {
          width: "100%",
        }
    },
    button: {
        marginTop: '15px',
        padding: '15px',
        boxShadow: 'none'

    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        width: '80%'
      },
      form__complete:{
        display: 'flex',
        flexDirection: 'column',
        width: '50% !important',
        justifyContent: 'center',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
          width: "100% !important",
        }
      },
      form__title: {
        textAlign: 'center',
        marginBottom: '10px'

      }
}));
