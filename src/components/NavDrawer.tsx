import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ContactForm from './form/ContactForm'

const theList = [
  { text: 'Input Form', route: '/form' },
  { text: 'Contact Card Grid', route: '/grid' },
  { text: 'Table', route: '/table' },
  { text: 'Data Grid', route: '/datagrid' },
]

const NavDrawer = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Materil UI (MUI5) Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="temporary" open={true}>
          <div>
            <List>
              {theList.map((nav, index) => (
                <ListItem key={nav.text}>
                  <Link to={nav.route}>{nav.text}</Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main>
          <Routes>
            <Route path={'/'} element={<ContactForm />} />
            <Route path={'/form'} element={<ContactForm />} />
            <Route path={'/grid'} element={<div>Grid</div>} />
            <Route path={'/table'} element={<div>Table</div>} />
            <Route path={'/datagrid'} element={<div>Datagrid</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default NavDrawer
