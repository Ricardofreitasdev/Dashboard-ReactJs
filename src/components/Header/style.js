import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  header__listIcons: {
    display: "flex",
  },
  header__menu: {
    display: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  header: {
    height: "10%",
    background: "#fff",
    width: "100%",
    display: "flex",
    alignItems: "center",

    "& nav": {
      marginLeft: "32px",
      marginRight: "32px",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",

      "& div": {
        display: "flex",
      },
    },
  },
}));
