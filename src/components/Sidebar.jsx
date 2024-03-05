import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import Admin from '@mui/icons-material/AdminPanelSettings';
import HelpIcon from '@mui/icons-material/Help';
import SupportIcon from '@mui/icons-material/Support';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from '@mui/material/Switch';
import Night from '@mui/icons-material/Brightness6';
const Sidebar = () => {
  return (
    <Box  flex={1} p={2} sx={{ display: {xs: "none", sm: "block"}}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#blog'>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#admin'>
              <ListItemIcon>
                <Admin />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#help'>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#support'>
              <ListItemIcon>
                <SupportIcon />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#audio'>
              <ListItemIcon>
                <AudiotrackIcon />
              </ListItemIcon>
              <ListItemText primary="Audio" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#settings'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#settings'>
              <ListItemIcon>
              <Night />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar