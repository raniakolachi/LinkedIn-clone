import React, { useState } from 'react';
import Sidebar from './Sidebar'; 
import Image from './assets/image.jpg';
import slide from './assets/slide-1 (1).jpg';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import { Grid } from '@mui/material';
import { Box, Typography, Card, Button, InputBase, IconButton } from '@mui/material';
import { Repeat, Search, Send, ThumbDown, ThumbUp, Comment, Delete } from '@mui/icons-material';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim() !== '') {
      setPosts([{ content: postContent, id: Date.now(),time: new Date().toLocaleString() }, ...posts]);
      setPostContent('');
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        
        <Box 
          sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3, 
            p: 3 
          }}
        >
          <div className='d-flex'>
            <div>
              <img className='rounded-5 me-4' height={50} src='https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_100_100/B56ZSRsJbqHwAU-/0/1737611057507?e=1743638400&v=beta&t=z3cvtEPHW8hHsvAC2ETigwVguKqJVsoMzYgULpu8Rt8'></img>
            </div>
            <div>
              <InputBase
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  color: 'black',
                  padding: '10px',
                  width: { xs: '100%', sm: '230%', md: '240%' },
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
                placeholder="Start a post"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
          </div>
          
          <Grid container spacing={3}>
            <Grid item xs={2} sm={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton className='text-success'>
                  <SmartDisplayIcon />
                </IconButton>
                <div>Video</div>
              </Box>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton className='text-info'>
                  <PhotoSizeSelectActualIcon />
                </IconButton>
                <div>Photos</div>
              </Box>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton className='text-danger'>
                  <ArtTrackIcon />
                </IconButton>
                <div>Articles</div>
              </Box>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, borderRadius: '50px', textTransform: 'none' }}
              onClick={handlePost}
            >
              Post
            </Button>
          </Grid>
          {posts.map((post) => (
  <Card 
    key={post.id} 
    sx={{ 
      p: 3, 
      maxWidth: { xs: '100%', sm: '90%', md: 600 }, 
      boxShadow: 3, 
      position: 'relative' ,
       overflow: 'hidden',
    }}
  >
    <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 2 }}>
      <img 
        src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8" 
        alt="User DP" 
        style={{ width: 50, height: 50, borderRadius: '50%' }} 
      />
      <Box>
        <Typography fontWeight="bold">Rania Majeed</Typography>
        <Typography fontSize="small" color="gray">{post.time}</Typography>
      </Box>
    </Box>

    <Typography sx={{ mt: 2 }}>{post.content}</Typography>

    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      mt={2} 
      flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <ThumbUp style={{ color: 'black' }} />
        <Typography>Like</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Comment style={{ color: 'black' }} />
        <Typography>Comment</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Repeat style={{ color: 'black' }} />
        <Typography>Repost</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Send style={{ color: 'black' }} />
        <Typography>Send</Typography>
      </Box>

      <IconButton 
        onClick={() => handleDeletePost(post.id)} 
        sx={{ position: 'absolute', top: 10, right: 10 }}
      >
        <Delete style={{ color: 'red' }} />
      </IconButton>
    </Box>
  </Card>
))}

            <Card sx={{ p: 3,  maxWidth: 600, overflow: 'hidden',  boxShadow: 3, mt: 3 }}> 

            <Typography variant="h6">Prepare for your job search</Typography>
            <img src={Image} alt="Job Search" style={{ width: '100%', overflow: 'hidden',  margin: '0px 0' }} />
            <Typography>
              Add your work experience and skills to show your strengths to recruiters.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, borderRadius: '50px', textTransform: 'none' }}
            >
              Update Profile
            </Button>
          </Card>

          {[...Array(3)].map((_, index) => (
            <Card key={index} sx={{ p: 3, maxWidth: 600, boxShadow: 3, mt: 3 }}>
              <Box display="flex" gap={2} alignItems="center">
                <img
                  src='https://media.licdn.com/dms/image/v2/D4D35AQES9_bA9Tyx4Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737113951052?e=1738569600&v=beta&t=f6OiMPmI-_-NCzIiqYSl3BHyTexiHgmD8EoRCQcEGgQ'
                  alt="User"
                  style={{ width: 70, height: 70, borderRadius: '50%' }}
                />
                <Typography>
                  <Typography>Alia Nawaz</Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, vitae nemo
                  assumenda nostrum laudantium modi magnam cum neque quaerat sed atque alias
                  necessitatibus nisi obcaecati iure perferendis quos nesciunt deleniti.
                </Typography>
              </Box>
              <img src={slide}  style={{ width: '100%' }} />
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Box display="flex" alignItems="center" gap={1}>
                  <ThumbUp style={{ color: 'black' }} />
                  <Typography>Like</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Comment style={{ color: 'black' }} />
                  <Typography>Comment</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Repeat style={{ color: 'black' }} />
                  <Typography>Repost</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Send style={{ color: 'black' }} />
                  <Typography>Send</Typography>
                </Box>
              </Box>
            </Card> 
          ))} 
        </Box>
        
      </div>
    </>
  );
};

export default HomePage;
