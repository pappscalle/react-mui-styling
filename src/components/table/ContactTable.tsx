import {
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import { contactData } from '../../data/ContactData'

const ContactTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Work Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => {
            return (
              <TableRow key={contact.name}>
                {Object.entries(contact).map(([key, value]) => {
                  if (key === 'skills') {
                    return <TableCell key={key}>{value.join(', ')}</TableCell>
                  }
                  if (key !== 'id') {
                    return <TableCell key={key}>{value}</TableCell>
                  }
                  return ''
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContactTable
