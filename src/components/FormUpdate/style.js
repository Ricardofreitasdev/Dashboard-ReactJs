import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  user__form__input: {
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "50% !important",
    justifyContent: "center",
    margin: "0 auto",
    '& .MuiOutlinedInput-input':{
        padding: '15px',

        [theme.breakpoints.down("sm")]: {
          padding: '10px',
        },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  form__title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  button: {
    marginTop: "15px",
    padding: "15px",
    boxShadow: "none",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      height: '50px',
      padding: "10px",
      width: '25%',


      '& p':{
        display: 'none',
      },

      '& .MuiButton-startIcon': {
        marginRight: '0px',
        marginLeft: '0px'
      }
    },
  },
  form__buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  message: {
    marginTop: "15px !important",
  },
  wrapper__image: {
    width: "100px",
    height: "100px",
    margin: "0 auto",
    marginBottom: "25px",
    borderRadius: "8px",
    overflow: "hidden",

    "& img": {
      maxWidth: "100%",
    },
  },

  image: {
    padding: "16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    background: "#f6f6f7",

    "& label": {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      color: '#fff',
      background: `#1f67d3!important`,
      padding: "10px",
      marginRight: "25px",
      borderRadius: '4px',

      "&:hover": {
        background: `${theme.palette.secondary.dark} !important`,
      },
    },

    "& p": {
      marginRight: "10px",
    },
  },
}));
