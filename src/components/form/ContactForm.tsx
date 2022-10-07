import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
} from '@mui/material'
import React, { useState } from 'react'
import { contactData, FormValues } from '../../data/ContactData'
import BeautifulTextField from './formsubcomponents/BeautifulTextField'
import BeautifulAutoComplete from './formsubcomponents/BeautifulAutoComplete'
import BeautifulSelect from './formsubcomponents/BeautifulSelect'
import BeautifulDatePicker from './formsubcomponents/BeautifulDatePicker'
import BeautifulRadios from './formsubcomponents/BeautifulRadios'

const roles = ['Software Dev', 'Architecht', 'Designer', 'Business Analyst']
const skills = ['React', 'Angular', 'Python', 'NodeJs', 'Machine Learning']

export const defaultRadioValue = 'Work From Home'
export const minWidth = 300

const paperInputStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
  },
  '& .MuiOutlinedInput-root:hover': {
    '& fieldset': {
      borderColor: 'primary.light',
    },
  },
  '& .MuiFormLabel-root': {
    color: 'primary.dark',
  },
}

const ContactForm = () => {
  const today = new Date()
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      role: '',
      name: '',
      skills: [],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultRadioValue,
    }
  }

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  )

  const [alertOpen, setAlertOpen] = useState(false)

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const hansleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setFormValues({
      ...formValues,
      role: value || '',
    })
  }

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const {
      target: { value },
    } = event
    setFormValues({
      ...formValues,
      skills: typeof value === 'string' ? value.split(', ') : value,
    })
  }

  const handleDatePickerChange = (
    // value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null,
    value: string | null,
    keyboardInputValue?: string | undefined
  ) => {
    setFormValues({
      ...formValues,
      startDate: value || '',
    })
  }

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    contactData.push(formValues)
    clearValues()
    setAlertOpen(true)
  }

  const handleClear = () => {
    clearValues()
  }

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() })
  }

  return (
    <>
      <Paper sx={paperInputStyles}>
        <form>
          <FormControl>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <BeautifulTextField
                onChange={handleTextFieldChange}
                value={formValues.name}
              />
              <BeautifulAutoComplete
                onInputChange={hansleAutoCompleteChange}
                value={formValues.role || ''}
                options={roles}
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <BeautifulSelect
                onChange={handleSelectChange}
                value={formValues.skills || ''}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <Checkbox
                        checked={formValues.skills.includes(skillName)}
                      />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  )
                })}
              </BeautifulSelect>

              <BeautifulDatePicker
                onChange={handleDatePickerChange}
                value={formValues.startDate}
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                padding: 2,
                justifyContent: 'space-between',
              }}
            >
              <BeautifulRadios
                value={formValues.preference}
                onChange={handleRadioChange}
              />

              <Stack>
                <Button onClick={handleSubmit}>Save</Button>
                <Button onClick={handleClear}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog
        open={alertOpen}
        onClose={() => {
          setAlertOpen(false)
        }}
      >
        <Alert
          onClose={() => {
            setAlertOpen(false)
          }}
        >
          <AlertTitle>Suceess!</AlertTitle>
          Form submitted
        </Alert>
      </Dialog>
    </>
  )
}

export default ContactForm
