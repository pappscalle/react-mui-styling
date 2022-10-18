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
        marginRight: { md: 2 },
        marginBottom: { xs: 2, md: 0 },
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
