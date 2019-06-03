import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';


// const styles = {
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   dense: {
//     marginTop: theme.spacing(2),
//   },
//   menu: {
//     width: 200,
//   },
// root: {
//   display: 'flex',
//     flexWrap: 'wrap',
//   },
// formControl: {
//   margin: theme.spacing(1),
//     minWidth: 120,
//   },
// selectEmpty: {
//   marginTop: theme.spacing(2),
//   },
// // };


class Form extends Component {

  render() {
    const { classes, item, onItemChange, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props





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
      <>

        {/* Textfield */}
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          // value={values.multiline}
          // onChange={handleChange('multiline')}
          // className={classes.textField}
          margin="normal"
          helperText="please Enter an event"
          variant="outlined"
        />
        {/* End textfield */}


      </>
    )
  }
}




export default Form