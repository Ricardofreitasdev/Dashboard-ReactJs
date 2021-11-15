import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    editUser: {
        display: 'flex',
        background: '#fff',
        flexDirection: 'column',
        borderRadius: '8px',
        padding: '32px',
        width: '100%',
        height: '100%',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            padding: '16px',
            justifyContent: 'start',

          }

        
    }
}));
