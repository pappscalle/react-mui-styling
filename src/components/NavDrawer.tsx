import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Theme, ThemeProvider, useTheme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
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
const transitionDuration = 1000

const themedStyles = (theme: Theme, mobileResonsiveWidth: string | number) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: mobileResonsiveWidth,
      '& .MuiBackdrop-root': {
        display: 'none',
      },
    },
    menuButton: {
      marginRight: 2,
    },
    drawerPaper: {
      width: mobileResonsiveWidth,
      backgroundColor: 'rgba(120,120,120, 0.2)',
    },
    content: {
      padding: 3,
      minWidth: mobileResonsiveWidth,
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    contentShift: {
      minWidth: mobileResonsiveWidth,
      marginLeft: mobileResonsiveWidth,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
  }
}

const NavDrawer = () => {
  const theme = useTheme()
  const greaterThan375 = useMediaQuery('(min-width: 376px)')
  const [open, setOpen] = useState(greaterThan375)
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : '100%'

  useEffect(() => {
    setOpen(greaterThan375)
  }, [greaterThan375])

  const handleMenuClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <BrowserRouter>
        <AppBar
          position="fixed"
          sx={themedStyles(theme, responsiveDrawerWidth).appBar}
        >
          <Toolbar>
            <IconButton
              onClick={handleMenuClick}
              edge="start"
              sx={{
                ...themedStyles(theme, responsiveDrawerWidth).menuButton,
                display: greaterThan375 ? 'none' : '',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Material UI (MUI5) Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={open}
          sx={themedStyles(theme, responsiveDrawerWidth).drawer}
          PaperProps={{
            elevation: 9,
            sx: themedStyles(theme, responsiveDrawerWidth).drawerPaper,
          }}
        >
          <Toolbar />
          <div>
            <List>
              {theList.map((nav, index) => (
                <ListItem
                  key={nav.text}
                  sx={{
                    borderBottom: '1px solid',
                    borderBottomColor: 'primary.main',
                  }}
                >
                  <Link to={nav.route}>{nav.text}</Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main
          style={{
            ...themedStyles(theme, responsiveDrawerWidth).content,
            ...(open
              ? themedStyles(theme, responsiveDrawerWidth).contentShift
              : {}),
          }}
        >
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
