import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, InputBase } from '@mui/material'
import React, { useState } from 'react'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {
  //useState for Menu
  const [open, setOpen] = useState(false)


  //Custom Toolbar
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  // custom search bar
  const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
  }));

  //Icon
  const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }))

  //User Box
  const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }))
  
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>Bagavad Gita</Typography>
        <SelfImprovementIcon sx={{display: {xs: "block", sm: "none"}}} />
        <Search><InputBase placeholder='search...'/></Search>
      <Icons>
      {/* Mail Badge */}
      <Badge badgeContent={4} color="error" >
        <MailIcon color="white" />
      </Badge>
      {/* Mail Badge */}
      <Badge badgeContent={4} color="error">
        <Notifications color="white" />
      </Badge>
      {/* Avatar */}
      <Avatar alt= "Remy Sharp" sx={{width:30, height:30}}
      onClick={e=>setOpen(true)}
      />
      </Icons>
      {/* User Box */}
      <UserBox>
        <Avatar alt= "Remy Sharp" sx={{width:30, height:30}} onClick={e=>setOpen(true)}/>
        <Typography variant='span'>Kiran</Typography>
        </UserBox>
      </StyledToolbar>
      {/* Menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar