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
      padding: "5px",
      background: `${theme.palette.secondary.main} !important`,
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
