import React from 'react'
import { Select } from '@mui/material'
import { minWidth } from '../ContactForm'

const BeautifulSelect = (props: any) => {
  return (
    <Select
      {...props}
      id="skill-select"
      labelId="skill-select-label"
      sx={{
        minWidth: minWidth,
        marginRight: 2,
      }}
      //   onChange={handleSelectChange}
      //   value={formValues.skills || ''}
      multiple
    ></Select>
  )
}

export default BeautifulSelect
