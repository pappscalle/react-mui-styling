import React from 'react'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { contactData } from '../../data/ContactData'

const getColumns = () => {
  return [
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'role',
      headerName: 'Role',
    },
    {
      field: 'skills',
      headerName: 'Skills',
      renderCell: (cellValue: GridRenderCellParams<string[]>) => {
        return (
          <div style={{ backgroundColor: 'blue', minWidth: '600px' }}>
            {cellValue.value ? cellValue.value[0] : ''}
          </div>
        )
      },
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
    },
    {
      field: 'preference',
      headerName: 'Preference',
    },
  ]
}

const ContactDataGrid = () => {
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={contactData}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
export default ContactDataGrid
