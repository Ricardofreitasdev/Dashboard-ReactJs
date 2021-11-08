import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
  },
  container__image: {
    backgroundColor: theme.palette.secondary.main,
    width: "60%",
    height: "100vh",
  },
  container__form: {
    width: "40%",
    height: "100vh",
  },
  container__form__wrapper: {
    padding: '32px',
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container__form__input: {
     marginBottom: '25px'
  },
}));