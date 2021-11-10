import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    sidebar: {
        width: '20%',
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
    },
    sidebar__close: {
        width: '75px',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
    },
    sidebar__nav: {
        

    },
    sidebar__avatar:{
        display: 'flex',
        alignItems: 'center',       
        width: '100%',
        height: '10%',
        padding: '32px'
   
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
    }
}));