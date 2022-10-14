import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Theme, ThemeProvider, useTheme } from '@mui/material/styles'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import BeautifulTheme from '../theme/BeautifulTheme'
import ContactDataGrid from './datagrid/ContactDataGrid'
import ContactForm from './form/ContactForm'
import ContactCardGrid from './grid/ContactCardGrid'
import ContactTable from './table/ContactTable'

const theList = [
  { text: 'Input Form', route: '/form' },
  { text: 'Contact Card Grid', route: '/grid' },
  { text: 'Table', route: '/table' },
  { text: 'Data Grid', route: '/datagrid' },
]

const drawerWidth = 240

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }
}

const styles = {
  drawer: {
    width: drawerWidth,
    '& .MuiBackdrop-root': {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(120,120,120, 0.2)',
  },
  content: {
    padding: 3,
    minWidth: drawerWidth,
    marginLeft: 0,
  },
  contentShift: {
    minWidth: drawerWidth,
    marginLeft: drawerWidth,
  },
}

const NavDrawer = () => {
  const theme = useTheme()
  return (
    <div>
      <BrowserRouter>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Material UI (MUI5) Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={true}
          sx={styles.drawer}
          PaperProps={{ elevation: 9, sx: styles.drawerPaper }}
        >
          <Toolbar />
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
        <main style={{ ...styles.content, ...styles.contentShift }}>
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path={'/'} element={<ContactForm />} />
              <Route path={'/form'} element={<ContactForm />} />
              <Route path={'/grid'} element={<ContactCardGrid />} />
              <Route path={'/table'} element={<ContactTable />} />
              <Route path={'/datagrid'} element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default NavDrawer
