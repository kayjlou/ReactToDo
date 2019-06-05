import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteRounded from '@material-ui/icons/DeleteRounded'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})


class ToDoList extends Component {
  state = {
    toDos: [
      "take out trash",
      "clean kitchen",
      "feed dog"
    ],
    completed: []
  }
  //Handles if item is checked
  handleCheck = item => {
    //Set temporary array 
    let temp = this.state.completed
    //Push todo Items to temporary array
    temp.push(item)
    //Set temp arrarys equal to state
    this.setState({
      completed: temp
    })
  }

  render() {
    const { classes } = this.props
    const { toDos, completed } = this.state

    return (
      <List className={classes.root}>
        {
          toDos.map(item => (
            <ListItem key={item} role={undefined} dense button onClick={() => this.handleCheck(item)}>
              <Checkbox checked={completed.indexOf(item) != -1} tabIndex={-1} disableRipple />
              <ListItemText primary={item} />
            </ListItem>
          ))
        }
      </List>
    )
  }
}

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToDoList)

