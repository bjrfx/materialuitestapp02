import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: {xs: "none", sm: "block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
      <Avatar alt="Trevor Henderson" src="" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
    </AvatarGroup>

    <Typography mt={2} mb={2} variant='h6' fontWeight={100}>Latest Photos</Typography>
    <ImageList col={3} rowHeight={100} gap={5}>
      <ImageListItem>
        <img 
          src='https://krishna.org/wp-content/uploads/2011/10/Gita-Plate-03.jpg'
          alt=''
        />
      </ImageListItem>

      <ImageListItem>
        <img 
          src='https://hinduismwayoflife.com/wp-content/uploads/2018/03/Bhagavad-gita-4.jpg'
          alt=''
        />
      </ImageListItem>

      <ImageListItem>
        <img 
          src='https://qph.cf2.quoracdn.net/main-qimg-62ac28046ad8538d0c55af956de40aa2-lq'
          alt=''
        />
      </ImageListItem>

      <ImageListItem>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATx4aruU5ptaBs9Zbw2aaNT4foYThRbgYY7ujuYyjVNvkatjqPyut3dRZQ9ebxkAHU2Q&usqp=CAU'
          alt=''
        />
      </ImageListItem>

      <ImageListItem>
        <img 
          src='https://shashidubey.com/wp-content/uploads/shashidubey-com/sites/83/KRISHNA-AND-ARJUNA.jpg'
          alt=''
        />
      </ImageListItem>

      <ImageListItem>
        <img 
          src='https://magarticles.magzter.com/articles/4560/513073/5f5affca914d5/BHAGAVAD-GITA.jpg'
          alt=''
        />
      </ImageListItem>
    </ImageList>

    <Typography mt={2} mb={2} variant='h6' fontWeight={100}>Latest Conversations</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="అర్జున విషాద యోగము?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                అర్జున
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="అర్జున"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                సంజయుడు , అర్జున 
              </Typography>
              {" —  సంజయుడు పలికెను; దృష్ట్వా — గమనించిన…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="దృష్ట్వా"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                సంజయుడు అర్జున
              </Typography>
              {' —  సంజయుడు పలికెను; దృష్ట్వా — గమనించిన…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar