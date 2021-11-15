import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({

      button: {
        marginTop: '15px',
        padding: '15px',
        boxShadow: 'none',
        width: '40%',
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
    }
}));
