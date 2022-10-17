import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { contactData, FormValues } from '../../data/ContactData'

const contactLiHeight = 23
let maxSkills = 1

const gridAlignSize = {
  minWidth: 400,
  minHeight: 300,
}

const ContactCardGrid = () => {
  const [open, setOpen] = useState(true)
  let gridAlignProps = open
    ? {}
    : {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }

  return (
    <Box m={1} p={1}>
      <Button
        variant="contained"
        sx={{ marginBottom: 3 }}
        onClick={() => setOpen(!open)}
      >
        Collapse
      </Button>
      <Grid
        container
        spacing={2}
        sx={{
          paddingRight: 2,
          paddingBottom: 2,
          marginLeft: 0,
          backgroundColor: 'grid.main',
          borderRadius: 2,
          width: 680,
        }}
      >
        {contactData.map((contact: FormValues) => {
          maxSkills =
            contact.skills.length > maxSkills
              ? contact.skills.length
              : maxSkills
          return (
            <Grid
              item
              key={contact.name}
              xs={6}
              sx={open ? {} : gridAlignSize}
              {...gridAlignProps}
            >
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar>
                      {contact.name?.substring(0, 1).toUpperCase() || 'A'}
                    </Avatar>
                  }
                  sx={{
                    borderBottom: '1px solid',
                    borderBottomColor: 'primary.main',
                  }}
                />
                <Collapse in={open}>
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactLiHeight }}
                  >
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
                </Collapse>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ContactCardGrid
