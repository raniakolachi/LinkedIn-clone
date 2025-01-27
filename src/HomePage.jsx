import React from 'react';
import Sidebar from './Sidebar'; 
import Image from './assets/image.jpg';
import Skill from './assets/Skills.png';

import { Box, Typography, Card, Button, InputBase, IconButton } from '@mui/material';
import { Repeat, Search, Send, ThumbDown, ThumbUp, Comment } from '@mui/icons-material';

const HomePage = () => {
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
          
          <InputBase
            sx={{
              backgroundColor: 'white',
              borderRadius: 5,
              color: 'black',
              width: '100%',
              maxWidth: 600,
             
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            placeholder="Search"
            startAdornment={
              <IconButton>
                <Search />
              </IconButton>
            }
          />

         
          <Card
            sx={{
              p: 3,
              maxWidth: 600,
              
              boxShadow: 3,
            }}
          >
            <Typography variant="h6">Prepare for your job search</Typography>
            <img src={Image} alt="Job Search" style={{ width: '100%', margin: '20px 0' }} />
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
            <Card
              key={index}
              sx={{
                p: 3,
                maxWidth: 600,
                boxShadow: 3,
              }}
            >
              <Box display="flex" gap={2} alignItems="center">
                <img
                  src='https://media.licdn.com/dms/image/v2/D4D35AQES9_bA9Tyx4Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737113951052?e=1738569600&v=beta&t=f6OiMPmI-_-NCzIiqYSl3BHyTexiHgmD8EoRCQcEGgQ'
                  alt="User"
                  style={{ width: 70, height: 70, borderRadius: '50%' }}
                />
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, vitae nemo
                  assumenda nostrum laudantium modi magnam cum neque quaerat sed atque alias
                  necessitatibus nisi obcaecati iure perferendis quos nesciunt deleniti.
                </Typography>
              </Box>
              <img src={Skill} alt="Skill" style={{ width: '100%',  }} />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
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
              </Box>
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
};

export default HomePage;
