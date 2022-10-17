import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material'
import React from 'react'
import { contactData, FormValues } from '../../data/ContactData'

const ContactCardGrid = () => {
  return (
    <Box m={1} p={1}>
      <Grid container spacing={2}>
        {contactData.map((contact: FormValues) => {
          return (
            <Grid item key={contact.name}>
              <Card sx={{ width: 300 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar>
                      {contact.name?.substring(0, 1).toUpperCase() || 'A'}
                    </Avatar>
                  }
                />
                <CardContent>
                  <Typography>
                    <b>Start Date:</b> {contact.startDate}
                  </Typography>
                  <Typography>
                    <b>Work Preference:</b> {contact.preference}
                  </Typography>
                  <List
                    sx={{
                      listStyle: 'list-item',
                      listStyleType: 'circle',
                      paddingLeft: 3,
                    }}
                    subheader={
                      <ListSubheader
                        sx={{
                          right: 24,
                          position: 'inherit',
                          fontSize: '1.25rem',
                          color: 'black',
                          paddingLeft: 0,
                        }}
                      >
                        Skills:
                      </ListSubheader>
                    }
                  >
                    {contact.skills.map((skill: string) => {
                      return (
                        <li
                          style={{
                            paddingTop: 0,
                            paddingLeft: 0,
                            paddingBottom: '2px',
                          }}
                          key={skill}
                        >
                          {skill}
                        </li>
                      )
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ContactCardGrid
