import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./App.css";
import List from './components/List'
import { AppBar, ToolBar, IconButton, Fab, } from '@material-ui/core'
import { MenuIcon, AddIcon, SearchIcon, MoreIcon } from '@material-ui/icons'


class App extends Component {

  render() {
    return (
      <>
        <Router>
          <div>
            <Route exact path='/' component={List} />
          </div>
        </Router>
      </>
    )
  }
}
export default App;
