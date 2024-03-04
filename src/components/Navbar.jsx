import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, InputBase } from '@mui/material'
import React from 'react'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
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
    display: "flex",
    gap: "20px",
    alignItems: "center"
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
    <Avatar alt= "Remy Sharp" sx={{width:30, height:30}}/>
      </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar