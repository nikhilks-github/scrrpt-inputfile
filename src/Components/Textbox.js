/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
  return (
   <TextField   onChange ={props.onChange}
      name = {props.name} variant="outlined" size= "small" />
  );
}

