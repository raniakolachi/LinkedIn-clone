import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, useMediaQuery, Typography } from "@mui/material";
import { Home, SupervisorAccount, BusinessCenter, Message, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const isSmallOrMediumScreen = useMediaQuery("(max-width:960px)"); 

  return (
    <>
    <Box>
      {!isSmallOrMediumScreen && (
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "10px",
              height: "auto",
              overflowY: "auto",
              marginTop: "100px",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Box
            style={{
              height: "50px",
              backgroundImage:
                'url("https://media.licdn.com/dms/image/v2/D5616AQG2NULRP75-Mw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737610197014?e=1743638400&v=beta&t=3ws9HE3Xl5vhB70VCRoRt1Ji3i4g9yt6ut89JzwsKE0")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             
              borderRadius: "10px 10px ",
            }}
          >
            <Link to="/profile-details">
              <img
                className="rounded-6"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginTop: "20px",
                  border: "2px solid white",
                }}
                src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8"
                alt="Rania Majeed"
              />
            </Link>
          </Box>

          <List>
            <ListItem>
              <ListItemText
                primary="Rania Majeed"
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      Frontend Web Developer | HTML5 | CSS3 | JavaScript | React.js
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Karachi Division, Sindh
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      xWave
                    </Typography>
                  </>
                }
                sx={{ color: "black" }}
              />
            </ListItem>
          </List>
          <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
      <Card sx={{ boxShadow: 3, padding: 3 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Manage your"
              secondary={
                <>
                  <Typography variant="body2" color="textSecondary">
                   Notifications
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    View Settings
                  </Typography>
                  
                </>
              }
              sx={{ color: "black" }}
            />
          </ListItem>
        </List>
      </Card>
    </Box>
        </Drawer>
        
      )}
      
    
    </Box>
    
    </>
  );
};

export default Sidebar;
