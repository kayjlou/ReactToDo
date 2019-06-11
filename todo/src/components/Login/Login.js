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
import './Login.css'



const styles = theme => ({
  quotes: {
    textAlign: 'center',
    padding: '10px'
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    paddingTop: "25px"
  },
  media: {
    paddingTop: "10px",
    height: 140,
    width: 160,
    margin: 'auto'
  },
  title: {
    textAlign: 'center',
  }
})


class Login extends Component {



  //Write function to randomly select quotes
  getRand = _ => {
    console.log('getting random number')
    return Math.floor(Math.random() * 5) + 1
  }




  //Runs random number to display quote 
  componentWillMount = () => {
    let num = this.getRand()
    console.log(`number is ${num}`)
    return num
  }
  render() {


    const quotes = [
      [`'Anyone who has never made a mistake has never tried anything new'`, '-Albert Einstein'],
      [`'If you spend too much time thinking about thing, you will never get it done'`, '-Bruce Lee'],
      [`'There is no reason not to follow your heart'`, '-Steve Jobs'],
      [`'Glory lies in the attemp to reach one's goal and not in reaching it`, '-Mahatma Ghandi'],
      [`'The secret of getting ahead is getting started'`, '-Mark Twain']
    ]



    const { uiConfig, classes, num } = this.props
    // const { num } = this.props
    return (
      <>

        {/* <NavBar /> */}
        {/* //Put something here to look cool */}
        <br />
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={Check}
            title="Check mark">
          </CardMedia>
          <CardContent>
            <h4 className={classes.title}>Welcome to your ToDos!</h4>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </CardContent>
        </Card>
        <br />
        <div className={classes.quotes}>
          <p>{quotes[0][0]}</p>
          <p>{quotes[0][1]}</p>

        </div>
      </>
    );
  }
}

export default withStyles(styles)(Login)