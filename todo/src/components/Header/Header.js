import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 345,
    margin: 'auto',
    textAlign: 'center'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          My To Dos
        </Typography>
        <br />
        <Typography component="p">
          "Why do tomorrow what you can do today?"
        </Typography>
      </Paper>
    </div>
  );
}

