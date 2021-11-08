import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
   layout: {
    justifyContent: "space-between",
    display: 'flex',
    flexDirection: 'row'
   },
   container: {
      backgroundColor: '#F8F7FC',
      width: '100vw',
      height: '100vh',
      padding: '32px'
   }
  }));