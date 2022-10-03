import React from 'react'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import { minWidth } from '../ContactForm'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const BeautifulDatePicker = (props: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        inputFormat="YYYY-MM-DD"
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />
        }}
        //   onChange={handleDatePickerChange}
        //   value={formValues.startDate}
      />
    </LocalizationProvider>
  )
}

export default BeautifulDatePicker
