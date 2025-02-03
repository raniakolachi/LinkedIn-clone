import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Bookmark, Settings, BarChart, Edit } from "@mui/icons-material"; 

const Sidebar = () => {
  const [open, ] = useState(true);
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
                padding: "8px",
                height: "auto",
                overflowY: "auto",
                marginTop: "100px",
                marginLeft: "10px",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <Card
              style={{
                height: "50px",
                backgroundImage:
                  'url("https://media.licdn.com/dms/image/v2/D5616AQG2NULRP75-Mw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737610197014?e=1743638400&v=beta&t=3ws9HE3Xl5vhB70VCRoRt1Ji3i4g9yt6ut89JzwsKE0")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
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
                    marginLeft: "10px",
                    border: "2px solid white",
                  }}
                  src="https://media.licdn.com/dms/image/v2/D5635AQGboRNCTDusBQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738561465276?e=1739167200&v=beta&t=5XpakMj5Ea7DqeUnNg-d58gbr2KEgAUcZurQvxb4Z50"
                  alt="Rania Majeed"
                />
              </Link>
            </Card>

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
          </Drawer>
        )}
      </Box>

      
      {!isSmallOrMediumScreen && (
        <Box
          sx={{
            position: "fixed",
            left: "12px", 
            top: "340px", 
            width: "235px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          
            zIndex: 999,
          }}
        >
          <List>
            <ListItem>
              <Settings sx={{ color: "gray", marginRight: "10px" }} />
              <ListItemText primary="Preferences" />
            </ListItem>

            <ListItem>
              <Bookmark sx={{ color: "gray", marginRight: "10px" }} />
              <ListItemText primary="My jobs" />
            </ListItem>

            <ListItem>
              <BarChart sx={{ color: "goldenrod", marginRight: "10px" }} />
              <ListItemText primary="My Career Insights" />
            </ListItem>
          </List>

          <Divider style={{ backgroundColor: "#ccc", height: "2px" }} />

          <ListItem>
            <Edit sx={{ color: "blue", marginRight: "10px",marginLeft: "15px" }} />
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
              Post a free job
            </Typography>
          </ListItem>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
