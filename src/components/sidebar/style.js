import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  sidebar: {
    width: "20%",
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    [theme.breakpoints.down("sm")]: {   
        width: "0px",
        overflow: 'hidden',
    },
  },
  sidebar__mobile: {
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
    position: "fixed",
    zIndex: "999",
    width: "250px",
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  sidebar__mobile__exit: {
    transform: "translateX(-200%)",
    overflow: 'hidden',
    animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },

  sidebar__closer: {
    height: "100vh",
    backgroundColor: "#000",
    position: "fixed",
    zIndex: "99",
    width: "100%",
    opacity: "0.8",
  },
  sidebar__nav: {},
  sidebar__avatar: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "10%",
    padding: "32px",
    position: "relative",
  },
  sidebar__avatar__image: {
    height: "100%",
  },
  sidebar__avatar__wrapper: {
    height: "50px",
    width: "50px",
    overflow: "hidden",
    borderRadius: "8px",
    border: `2px solid ${theme.palette.secondary.light}`,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  white: {
    color: "#fff",
  },
  sidebar__perfil: {
    position: "absolute",
    left: "20px",
    top: "15px",
  },
}));
