import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formDiv: {
    marginLeft: 100,
    marginTop: 100
  },

}))


export default function Form(props) {
  const classes = useStyles();


  // const {item, onItemChange, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props





  // Code for textfield -----------------------------------------
  // function OutlinedTextFields() {
  //   const classes = useStyles();
  //   const [values, setValues] = React.useState({
  //     name: 'Cat in the Hat',
  //     age: '',
  //     multiline: 'Controlled',
  //     currency: 'EUR',
  //   });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  // Code for textfield  END -----------------------------------------

  // Code for age input-------------------------------------------
  // function SimpleSelect() {
  //   const classes = useStyles();
  //   const [values, setValues] = React.useState({
  //     age: '',
  //     name: 'hai',
  //   });

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  // function handleChange(event) {
  //   setValues(oldValues => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value,
  //   }));
  // }

  return (

    <div className={classes.formDiv}>
      {/* Textfield */}
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        /* value={values.multiline} */
        // onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
        helperText="Please enter a To Do item"
        variant="outlined"
      />
      {/* End textfield */}

      {/* Add button */}
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>

  )
}




