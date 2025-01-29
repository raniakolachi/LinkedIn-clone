import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import { LinkedIn, Search, Home, SupervisorAccount, BusinessCenter, Message, Notifications, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));  
  const [open, setOpen] = useState(false);

 
  return (
    <>
      <AppBar position="sticky" className="bg-body-secondary text-black">
        <Toolbar className="container-fluid d-flex justify-content-between align-items-center">
          
        
          <Box className="d-flex align-items-center">
            <IconButton color="inherit">
              <LinkedIn className="text-primary" style={{ fontSize: "40px" }} />
            </IconButton>

            {!isMobile && (
              <InputBase
                className="ms-2 px-2"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  width: "250px",
                }}
                placeholder="Search"
                startAdornment={
                  <IconButton>
                    <Search />
                  </IconButton>
                }
              />
            )}
          </Box>

          
          {isMobile ? (
            <IconButton onClick={() => setOpen(true)}>  
              <Menu className="text-black" />
            </IconButton>
          ) : (
            <Box className="d-flex align-items-center">
              {[
                { text: "Home", icon: <Home />, path: "/" },
                { text: "My Network", icon: <SupervisorAccount />, path: "#" },
                { text: "Jobs", icon: <BusinessCenter />, path: "/jobs" }, 
                { text: "Messages", icon: <Message />, path: "#" },
                { text: "Notifications", icon: <Notifications />, path: "#" },
                { text: "Me", icon: <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8" alt="Profile" />, path: "/profile-details" }, // Avatar for "Me"
              ].map((item, index) => (
                <Link to={item.path} className="text-decoration-none text-black" key={index}>
                  <div className="d-flex flex-column align-items-center mx-2">
                    <IconButton color="inherit">{item.icon}</IconButton>
                    <Typography variant="caption" className="text-black">{item.text}</Typography>
                  </div>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

     
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List className="p-3">
          {[
            { text: "Home", icon: <Home />, path: "/" },
            { text: "My Network", icon: <SupervisorAccount />, path: "#" },
            { text: "Jobs", icon: <BusinessCenter />, path: "/jobs" }, 
            { text: "Messages", icon: <Message />, path: "#" },
            { text: "Notifications", icon: <Notifications />, path: "#" },
            { text: "Me", icon: <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8" alt="Profile" />, path: "/profile-details" }, 
          ].map((item, index) => (
            <ListItem button key={index} component={Link} to={item.path} onClick={() => setOpen(false)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
