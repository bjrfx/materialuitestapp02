import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>Bagavad Gita</Typography>
        <SelfImprovementIcon sx={{display: {xs: "block", sm: "none"}}} />
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar