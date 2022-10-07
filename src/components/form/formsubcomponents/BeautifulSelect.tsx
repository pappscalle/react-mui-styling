import React, { useEffect, useRef, useState } from 'react'
import { Select } from '@mui/material'
import { minWidth } from '../ContactForm'

const BeautifulSelect = (props: any) => {
  const [position, setPosition] = useState(0)
  const selectInputComponent = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    )
  }, [])

  return (
    <Select
      {...props}
      ref={selectInputComponent}
      id="skill-select"
      labelId="skill-select-label"
      sx={{
        minWidth: minWidth,
        marginRight: 2,
      }}
      //   onChange={handleSelectChange}
      //   value={formValues.skills || ''}
      multiple
      renderValue={(selected: string[]) => selected.join(', ')}
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position}px !important`,
            maxHeight: 180,
          },
        },
      }}
    />
  )
}

export default BeautifulSelect
