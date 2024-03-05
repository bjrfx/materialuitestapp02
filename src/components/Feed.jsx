import { Box, Pagination } from '@mui/material';
import Post from './Post';
import FloatingButton from './FloatingButton';

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Pagination count={10} variant="outlined" />
      <FloatingButton />
    </Box>
  );
};

export default Feed;
