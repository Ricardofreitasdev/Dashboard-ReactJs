import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    sidebar: {
        width: '20%',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
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
        justifyContent: 'center',
   
    },
    sidebar__avatar__image:{
        width: '100%',
    }
    ,
    sidebar__avatar__wrapper:{
        width: '50%',
        borderRadius: '50%',
        overflow: 'hidden'

    }
}));