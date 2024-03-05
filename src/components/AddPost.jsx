import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

const AddPost = () => {
    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Add post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={e=>setOpen(true)}>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </Tooltip>

            {/* Modal */}

            <StyledModal
                open={open}
                onClose={e=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography variant='h6' color="grey" textAlign="center">Create Post</Typography>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost