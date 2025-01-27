import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, useMediaQuery } from "@mui/material";
import { Home, SupervisorAccount, BusinessCenter, Message, Notifications } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      {!isSmallScreen && (
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
              padding: "10px",
              borderRadius: "10px 10px 0 0",
            }}
          >
           
            <img
              className="rounded-6"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                marginTop: '20px',
                border: "2px solid white",
              }}
              src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8"
              alt="Rania Majeed"
            />
           
            
          </Box>

          
          <List>
          <ListItem style={{ color: "black",   }}>Rania Majeed</ListItem>
            <ListItem button>
              <ListItemIcon>
                <Home sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccount sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="My Network" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BusinessCenter sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Jobs" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Message sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Messages" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Notifications sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Notifications" sx={{ color: "black" }} />
            </ListItem>
          </List>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
