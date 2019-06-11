import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./App.css";
import Form from './components/Form/Form.js'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ToDoList from "./components/ToDoList";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Login from './components/Login'

// import { AppBar, ToolBar, IconButton, Fab, } from '@material-ui/core'
// import { MenuIcon, AddIcon, SearchIcon, MoreIcon } from '@material-ui/icons'

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBkOYY-FU6HmrQkmPNafauTUjArtlaS5hY",
  authDomain: "todoreact-60580.firebaseapp.com",
  databaseURL: "https://todoreact-60580.firebaseio.com",
  projectId: "todoreact-60580",
  storageBucket: "todoreact-60580.appspot.com",
  messagingSenderId: "131514335003",
  appId: "1:131514335003:web:a621949708e14cf7"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

class App extends Component {
  state = {
    toDos: [
      "take out trash",
      "clean kitchen",
      "feed dog"
    ],
    completed: [],
    item: ''
  }
  //Handles if item is checked
  handleCheck = item => {
    //Set temporary array 
    let temp = this.state.completed
    //Logic to check if items are completed or not
    if (temp.indexOf(item) != -1) {
      temp.splice(temp.indexOf(item), 1)
      this.setState({ completed: temp })
    } else {
      //Push todo Items to temporary array
      temp.push(item)
      //Set temp arrarys equal to state
      this.setState({ completed: temp })
    }
  }

  handleAddToDo = _ => {
    console.log("adding todo")
    let temp = this.state.toDos
    temp.push(this.state.item)
    this.setState({ toDos: temp })
  }

  onItemChange = event => {
    event.preventDefault()
    this.setState({ item: event.target.value })

  }
  render() {
    const { item, toDos, completed } = this.state
    // let items = this.state.todos.map

    return (
      <>
        <Router>
          <NavBar />
          {/* <Header /> */}
          <br />
          <Route exact path='/login' component={() => <Login uiConfig={uiConfig} />} />
          <Route exact path='/toDos' component={() =>
            <ToDoList toDos={toDos} completed={completed} handleCheck={this.handleCheck} />
          } />
          <Route exact path='/toDos' component={() =>
            <Form handleAddToDo={this.handleAddToDo} onItemChange={this.onItemChange} item={item} />} />
        </Router>
      </>
    )
  }
}
export default App;
