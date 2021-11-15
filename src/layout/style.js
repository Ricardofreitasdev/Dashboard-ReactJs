import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    height: '100vh'
  },
  layout: {
    display: "flex",
    height: "100%"
  },
  container: {
    backgroundColor: "#e8e6f0",
    padding: "32px",
    height: '90%',
    [theme.breakpoints.down('sm')]: {
      padding:"16px",
    }
  },
}));
