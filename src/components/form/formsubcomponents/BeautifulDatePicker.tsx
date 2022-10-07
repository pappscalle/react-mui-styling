import React from 'react'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import { minWidth } from '../ContactForm'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CalendarToday } from '@mui/icons-material'

const popperSx = {
  '& .MuiPaper-root': {
    color: 'yellow',
  },
  '& [role=grid]': {
    backgroundColor: 'rgba(0,0,0,0.1)',
    '& button': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
}

const BeautifulDatePicker = (props: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        views={['day']}
        inputFormat="YYYY-MM-DD"
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />
        }}
        InputProps={{
          sx: {
            '& .MuiSvgIcon-root': {
              color: 'primary.main',
            },
          },
        }}
        components={{
          OpenPickerIcon: CalendarToday,
        }}
        PopperProps={{
          sx: popperSx,
        }}
        //   onChange={handleDatePickerChange}
        //   value={formValues.startDate}
      />
    </LocalizationProvider>
  )
}

export default BeautifulDatePicker
