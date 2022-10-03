import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { minWidth } from '../ContactForm'

const BeautifulAutoComplete = (props: any) => {
  return (
    <Autocomplete
      {...props}
      sx={{ minWidth: minWidth }}
      //   onInputChange={hansleAutoCompleteChange}
      //   value={formValues.role || ''}
      //   options={roles}
      isOptionEqualToValue={(option, value) => option === value || value === ''}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderInput={(params) => {
        return <TextField name="role" {...params} />
      }}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>
      }}
    />
  )
}

export default BeautifulAutoComplete
