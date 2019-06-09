import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import NavBar from '../../components/NavBar/NavBar'
import Link from 'react-router-dom'



class Login extends Component {
  render() {
    const { uiConfig } = this.props
    return (
      <>
        {/* <NavBar /> */}
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </>
    );
  }
}

export default Login