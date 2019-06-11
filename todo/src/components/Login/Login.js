import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import NavBar from '../../components/NavBar/NavBar'
import Link from 'react-router-dom'
import Header from '../Header'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Check from '../../assets/images/check.png'
import CardMedia from '@material-ui/core/CardMedia';



const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 140,
    width: 150,
    margin: 'auto'
  },
  title: {
    textAlign: 'center'
  }
})

class Login extends Component {
  render() {

    const { uiConfig, classes } = this.props
    return (
      <>
        {/* <NavBar /> */}
        {/* //Put something here to look cool */}
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={Check}
            title="Check mark">
          </CardMedia>
          <CardContent>
            <h5 className={classes.title}>Welcome to your ToDos!</h5>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(Login)