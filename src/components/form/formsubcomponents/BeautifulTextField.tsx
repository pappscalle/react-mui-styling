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
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        '& .MuiOutlinedInput-root.Mui-focused': {
          fieldset: {
            borderColor: 'primary.dark',
          },
        },
        '& .MuiOutlinedInput-root:hover': {
          '& fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: 'orange',
          },
        },
      }}
      //   onChange={handleTextFieldChange}
      //   value={formValues.name}
    />
  )
}

export default BeautifulTextField
