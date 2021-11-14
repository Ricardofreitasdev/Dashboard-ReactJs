import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    button: {
        marginRight: '20px !important',
        background: `${theme.palette.primary.main} !important`,
    },
    modal: {
        '& #cancel': {
            color: `${theme.palette.secondary.main} !important`,
            '&:hover': {
                background: 'none'
            }
        },
        '& #delete': {
            color: `${theme.palette.primary.main} !important`,
            '&:hover': {
                background: theme.palette.primary.main,
                color: '#fff !important'
            }
        }

    },

}));
