import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography } from "@mui/material";
import {
  LinkedIn,
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Message,
  Notifications,
} from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <AppBar position="sticky" className="bg-body-secondary text-black">
      <Toolbar className="container-fluid d-flex justify-content-between align-items-center">
       
        <Box className="d-flex align-items-center">
          <IconButton color="inherit">
            <LinkedIn className="text-primary" style={{ fontSize: "40px" }} />
          </IconButton>
          <InputBase
            className="ms-2"
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
        </Box>

        
        <Box className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-center mx-3">
            <IconButton color="inherit">
              <Home />
            </IconButton>
            <Typography variant="caption" className="text-black">
              Home
            </Typography>
          </div>
          <div className="d-flex flex-column align-items-center mx-3">
            <IconButton color="inherit">
              <SupervisorAccount />
            </IconButton>
            <Typography variant="caption" className="text-black">
              My Network
            </Typography>
          </div>
          <div className="d-flex flex-column align-items-center mx-3">
            <IconButton color="inherit">
              <BusinessCenter />
            </IconButton>
            <Typography variant="caption" className="text-black">
              Jobs
            </Typography>
          </div>
          <div className="d-flex flex-column align-items-center mx-3">
            <IconButton color="inherit">
              <Message />
            </IconButton>
            <Typography variant="caption" className="text-black">
              Messages
            </Typography>
          </div>
          <div className="d-flex flex-column align-items-center mx-3">
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <Typography variant="caption" className="text-black">
              Notifications
            </Typography>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
