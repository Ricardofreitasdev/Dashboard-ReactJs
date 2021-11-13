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
}));
