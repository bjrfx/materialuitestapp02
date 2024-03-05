import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
const Post = () => {
  return (
    <Card sx={{marginBottom: "5%"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            KB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Kiran Bandarupalli"
        subheader="November 29, 2017"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://krishna.org/wp-content/uploads/2011/10/Gita-Plate-03.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        ధృతరాష్ట్ర ఉవాచ ।\nధర్మ క్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః ।\nమామకాః పాండవాశ్చైవ కిమకుర్వత సంజయ ।। 1 ।।
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  )
}

export default Post