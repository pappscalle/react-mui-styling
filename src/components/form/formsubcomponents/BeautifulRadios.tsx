import React from 'react'
import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { defaultRadioValue, minWidth } from '../ContactForm'

const BeautifulRadios = (props: any) => {
  return (
    <FormGroup
      sx={{
        minWidth: minWidth,
        marginRight: { md: 2 },
        marginBottom: { xs: 2, md: 0 },
      }}
    >
      <FormLabel component="legend" htmlFor="preference-type-radio">
        Work Preference
      </FormLabel>
      <RadioGroup
        aria-label="preference"
        id="preference-type-radio"
        name="preference"
        value={props.preference}
        onChange={props.handleRadioChange}
      >
        <FormControlLabel
          label={defaultRadioValue}
          value={defaultRadioValue}
          control={<Radio />}
        />
        <FormControlLabel label="Hybrid" value="Hybrid" control={<Radio />} />
        <FormControlLabel
          label="In Office"
          value="In Office"
          control={<Radio />}
        />
      </RadioGroup>
      <FormHelperText>Radio group hint / helper text</FormHelperText>
    </FormGroup>
  )
}

export default BeautifulRadios
