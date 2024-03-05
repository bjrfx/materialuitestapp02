import React, { useState } from 'react';
import { Box, Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Fab } from '@mui/material';

const FloatingButton = () => {
    const [hovered, setHovered] = useState(false);

  const FloatingBtn = styled(Fab)({
    position: 'fixed',
    bottom: 50,
    left: 100,
    backgroundColor: 'crimson', // or any color you prefer
    color: 'white',
    '&:hover': {
      backgroundColor: '#ff5577', // darken the color on hover if needed
    },
  });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box position="relative">
        <Tooltip
          title="Create new post"
          open={hovered}
          placement="left"
        >
          <FloatingBtn
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AddCircleOutlineIcon />
          </FloatingBtn>
        </Tooltip>
      </Box>
  )
}

export default FloatingButton