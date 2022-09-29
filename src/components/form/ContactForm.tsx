import {
  Autocomplete,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material'
import React from 'react'
import { contactData, FormValues } from '../../data/ContactData'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'

const roles = ['Software Dev', 'Architecht', 'Designer', 'Business Analyst']
const skills = ['React', 'Angular', 'Python', 'NodeJs', 'Machine Learning']
const ContactForm = () => {
  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row>
            <TextField
              id="nam</TextField>e"
              name="name"
              label="Name"
              variant="outlined"
            />
            <Autocomplete
              options={roles}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderInput={(params) => {
                return <TextField name="role" {...params} />
              }}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>
              }}
            />
          </FormGroup>
          <FormGroup row>
            <Select id="skill-select" labelId="skill-select-label">
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                )
              })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="YYYY-MM-DD"
                renderInput={(params) => {
                  return <TextField {...params} />
                }}
                onChange={() => {}}
                value={''}
              />
            </LocalizationProvider>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  )
}

export default ContactForm
