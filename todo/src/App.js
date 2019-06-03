import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./App.css";
import List from './components/ToDoList'
import Form from './components/Form/Form.js'
import Age from './components/Age/Age.js'
// import { AppBar, ToolBar, IconButton, Fab, } from '@material-ui/core'
// import { MenuIcon, AddIcon, SearchIcon, MoreIcon } from '@material-ui/icons'


class App extends Component {

  render() {
    return (
      <>
        <Form />
        <Age />
        <Router>
          <div>
            {/* <Route exact path='/age' component={Age} /> */}
            {/* <Route exact path='/createoccasion' component={Form} /> */}
          </div>
        </Router>
      </>
    )
  }
}
export default App;
