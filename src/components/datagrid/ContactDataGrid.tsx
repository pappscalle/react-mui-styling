import React from 'react'
import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid'
import { contactData } from '../../data/ContactData'
import { Box, Button } from '@mui/material'

const handlePrint = (cellValues: GridRenderCellParams) => {
  console.log(cellValues)
}

const DataGridSx = {
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'primary.main',
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '& .MuiDataGrid-row': {
      '&:nth-of-type(2n)': {
        backgroundColor: 'grid.main',
      },
    },
  },
}

const getColumns = () => {
  return [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return (
          <Box sx={{ color: 'primary.main', fontSize: 18, fontWeight: 'bold' }}>
            {cellValues.value}
          </Box>
        )
      },
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
    {
      field: 'print',
      renderCell: (cellValues: GridRenderCellParams) => {
        return (
          <Button
            variant="contained"
            onClick={() => {
              handlePrint(cellValues)
            }}
          >
            Print
          </Button>
        )
      },
    },
  ]
}

const ContactDataGrid = () => {
  const rows = [...contactData]

  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={DataGridSx}
        components={{
          Toolbar: () => (
            <GridToolbar
              sx={{
                justifyContent: 'flex-end',
                '& .MuiBox-root': {
                  display: 'none',
                },
              }}
            ></GridToolbar>
          ),
        }}
        initialState={{
          sorting: { sortModel: [{ field: 'name', sort: 'asc' }] },
        }}
      />
    </div>
  )
}
export default ContactDataGrid
