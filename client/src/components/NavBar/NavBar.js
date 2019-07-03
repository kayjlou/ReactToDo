import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import Assignment from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft: '5px',
    flexGrow: 1,
  },
  link: {
    color: "white"
  }

}));


export default function NavBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to='/toDos'>
              <Assignment className={classes.link} />
            </Link>
            <Typography variant="h6" className={classes.title}>
              MyToDos
          </Typography>
            <Link to='/login'>
              <AccountCircleRounded className={classes.link} />
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
