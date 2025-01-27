import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
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
  const theme = useTheme(); // Access theme to get breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen size is small or below

  return (
    <AppBar position="sticky" className="bg-body-secondary text-black">
      <Toolbar className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Section: LinkedIn Icon and Search (only show LinkedIn on small screens) */}
        <Box className="d-flex align-items-center">
          {/* Show only LinkedIn icon on mobile */}
          {isMobile ? (
            <IconButton color="inherit">
              <LinkedIn className="text-primary" style={{ fontSize: "40px" }} />
            </IconButton>
          ) : (
            <>
              <IconButton color="inherit">
                <LinkedIn className="text-primary" style={{ fontSize: "40px" }} />
              </IconButton>
              <InputBase
                className="ms-2"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  width: "250px", // Full width on large screens
                }}
                placeholder="Search"
                startAdornment={
                  <IconButton>
                    <Search />
                  </IconButton>
                }
              />
            </>
          )}
        </Box>

        {/* Right Section: Navigation Icons (Hide on mobile) */}
        {!isMobile && (
          <Box className="d-flex align-items-center">
            {/* Each navigation item */}
            {["Home", "My Network", "Jobs", "Messages", "Notifications"].map((text, index) => (
              <div className="d-flex flex-column align-items-center mx-3" key={index}>
                <IconButton color="inherit">
                  {index === 0 && <Home />}
                  {index === 1 && <SupervisorAccount />}
                  {index === 2 && <BusinessCenter />}
                  {index === 3 && <Message />}
                  {index === 4 && <Notifications />}
                </IconButton>
                <Typography variant="caption" className="text-black">
                  {text}
                </Typography>
              </div>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
