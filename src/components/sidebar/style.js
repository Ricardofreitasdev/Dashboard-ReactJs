import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    sidebar: {
        transform: 'translateX(0%)',
        width: '20%',
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
        position: 'relative',
        transition: 'ease',
        transitionDuration: '0.3s',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
    },
    sidebar__mobile: {
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
        position: 'fixed',
        zIndex: '999',
        width: '250px'
    },
    sidebar__closer: {
        height: '100vh',
        backgroundColor: '#000',
        position: 'fixed',
        zIndex: '99',
        width: '100%',
        opacity: '0.8'
    },
    sidebar__nav: {
        

    },
    sidebar__avatar:{
        display: 'flex',
        alignItems: 'center',       
        width: '100%',
        height: '10%',
        padding: '32px',
        position: 'relative'
   
    },
    sidebar__avatar__image:{
        height: '100%',
    }
    ,
    sidebar__avatar__wrapper:{
        height: '50px',
        overflow: 'hidden',
        borderRadius: '8px',
        border: `2px solid ${theme.palette.secondary.light}`
    },
    white: {
        color: "#fff"
    },
    sidebar__perfil: {
        position: 'absolute',
        left: '20px',
        top: '15px'
    }
}));