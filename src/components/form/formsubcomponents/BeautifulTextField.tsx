import React from 'react'
import { TextField } from '@mui/material'
import { minWidth } from '../ContactForm'

const BeautifulTextField = (props: any) => {
  return (
    <TextField
      {...props}
      id="nam</TextField>e"
      name="name"
      label="Name"
      variant="outlined"
      sx={{ minWidth: minWidth }}
      //   onChange={handleTextFieldChange}
      //   value={formValues.name}
    />
  )
}

export default BeautifulTextField
