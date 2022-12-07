import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

import LightModeIcon from '@mui/icons-material/LightMode';
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import TaskIcon from '@mui/icons-material/Task';
import MailIcon from '@mui/icons-material/Mail';

import PeopleIcon from '@mui/icons-material/People';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export default function NestedList(props) {




  if (props.issidebaropen) {
    if (props.ismainbaropen) {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
  

    return (







      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10}>
          <Grid xs={12} md={10} lg={10}>
            <Item><List
              sx={{ width: '100%', maxWidth: 360,bgcolor: 'background.paper'  }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">

                </ListSubheader>
              }
             >  
            <ListItemButton>
                <ListItemIcon>
                  <LightModeIcon />
                </ListItemIcon>
                <ListItemText primary="My Day" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <GradeIcon />
                </ListItemIcon>
                <ListItemText primary="important" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="planned" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Assigned to me" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <TaskIcon />
                </ListItemIcon>
                <ListItemText primary="Tasks" />
              </ListItemButton>

              

              
             </List>
             <Grid sx={{ order: { xs: 2, sm: 4} }}>
             <Item><MailIcon />
             <CalendarMonthIcon />
             <PeopleIcon />
             <AttachFileIcon />
             <DoneIcon /></Item>
           </Grid>




              
            </Item>
          </Grid>
        </Grid>
       </Box>
       );
      }
  }
       }
