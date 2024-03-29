import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
  },
  container__image: {
    backgroundColor: theme.palette.secondary.main,
    width: "60%",
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',

    '& img': {
      opacity: '0.4',
      width: '50%'
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },
  container__form: {
    width: "40%",
    height: "100vh",
    [theme.breakpoints.down('sm')]: {
      width: "100%",

    },
  },
  container__form__wrapper: {
    padding: '32px',
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },
  container__form__input: {
     marginBottom: '15px',
     marginTop: '15px'
  },
  
}));
