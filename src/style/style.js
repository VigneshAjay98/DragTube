import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: '12px',
    paddingBottom: '18px',
    padding: theme.spacing(0.05),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#181816'
  },
}));