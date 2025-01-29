import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import hiring from './assets/hiring-jpg.jpg';

const SecondarySidebar = () => {
  return (
    <>
      
      <Box
        sx={{
          width: 220, 
          backgroundColor: 'white',
          color: 'black',
          marginTop: '80px',
          marginRight: '30px',
          padding: '30px', 
          position: 'absolute',
          borderRadius: '12px',
          right: '0', 
          top: '0',
          height: 'auto', 
          boxShadow: 3, 
          display: { xs: 'none', sm: 'none' , lg: 'block'},
        }}
      >
         <img
          src={hiring}
          alt="Job preparation illustration"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />

        <List sx={{ padding: 0 }}>
          <ListItem button sx={{ padding: '2px 0' }}>
            <ListItemText primary="About Accessibility" />
          </ListItem>
          
          <ListItem button sx={{ padding: '2px 0' }}>
            <ListItemText primary="Help Center Privacy & Terms" />
          </ListItem>
          
          <ListItem button sx={{ padding: '2px 0' }}>
            <ListItemText primary="Ad Choices Advertising" />
          </ListItem>
        </List>
      </Box>

      
    </>
  );
};

export default SecondarySidebar;
