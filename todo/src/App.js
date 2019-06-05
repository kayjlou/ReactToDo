import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./App.css";
import List from './components/ToDoList'
import Form from './components/Form/Form.js'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import ToDoList from "./components/ToDoList";

// import { AppBar, ToolBar, IconButton, Fab, } from '@material-ui/core'
// import { MenuIcon, AddIcon, SearchIcon, MoreIcon } from '@material-ui/icons'



class App extends Component {

  state = {
    todos: ["take out trash"]
  }
  render() {
    // let items = this.state.todos.map

    return (
      <>
        <NavBar />
        <br />
        <Header />
        <br/>
        <ToDoList />
        <Form />
      </>
    )
  }
}
export default App;
