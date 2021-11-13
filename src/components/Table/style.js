import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    table: {
      boxShadow: "none",
      borderRadius: '8px',
      outline: "none",
      overflow: "hidden",
      marginTop: '32px',

      [theme.breakpoints.down("sm")]: {
        '& .MuiTypography-subtitle1': {
          display: 'none !important',
        }
      },

      
    },
    button__list:{
      display: 'flex',
      padding: '16px',

      [theme.breakpoints.down("sm")]: {
       
         width: '100%',
         justifyContent: 'space-between',
       
      },

    },
    button__actions: {
      marginRight: '10px'
    }
  }));