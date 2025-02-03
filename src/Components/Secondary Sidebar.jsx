import React from "react";
import { Card, CardContent, Button } from "@mui/material";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import hiring from "./assets/hiring-jpg.jpg";

const puzzleGames = [
  {
    name: "Tango",
    description: "Harmonize the grid",
    image: "https://static.licdn.com/aero-v1/sc/h/auba7jqkz2j042d09c5406tax",
  },
  {
    name: "Queens",
    description: "Crown each region",
    image: "https://static.licdn.com/aero-v1/sc/h/6uvsjtqx2j32uh1a803qygh5y",
  },
  {
    name: "Pinpoint",
    description: "Guess the category",
    image: "https://static.licdn.com/aero-v1/sc/h/75hui8gm3kv7ics73rcgqeaef",
  },
  {
    name: "Crossclimb",
    description: "Unlock a trivia ladder",
    image: "https://static.licdn.com/aero-v1/sc/h/4mjo14pdidwm233ks38d99107",
  },
];

const SecondarySidebar = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 80,
        padding: "10px",
        display: { xs: "none", md: "none", lg: "block" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "12px",
          boxShadow: 3,
          marginBottom: "10px",
        }}
      >
        <Typography variant="h6">Today's Puzzle Games</Typography>
        <List>
          {puzzleGames.map((game, index) => (
            <ListItem button key={index}>
              <ListItemAvatar>
                <Avatar
                  src={game.image}
                  alt={game.name}
                  variant="square"
                  sx={{ width: 50, height: 50 }}
                />
              </ListItemAvatar>
              <ListItemText primary={game.name} secondary={game.description} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Add to your feed</Typography>
          <Box
            className="mt-3"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiuLf4oFxiuenJAhQlgqJq8vjTh1lxE7z9A&s"
              sx={{ width: 50, height: 50, mr: 2 }}
            />
            <Box>
              <Typography variant="body1">Aiza Khan</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                HR Manager at YerlaTech Solution
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" sx={{ borderRadius: "20px" }}>
              Follow
            </Button>
          </Box>

          <Box
            className="mt-3"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiuLf4oFxiuenJAhQlgqJq8vjTh1lxE7z9A&s"
              sx={{ width: 50, height: 50, mr: 2 }}
            />
            <Box>
              <Typography variant="body1">Aiza Khan</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                HR Manager at YerlaTech Solution
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" sx={{ borderRadius: "20px" }}>
              Follow
            </Button>
          </Box>

          <Box
            className="mt-3"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiuLf4oFxiuenJAhQlgqJq8vjTh1lxE7z9A&s"
              sx={{ width: 50, height: 50, mr: 2 }}
            />
            <Box>
              <Typography variant="body1">Aiza Khan</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                HR Manager at YerlaTech Solution
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" sx={{ borderRadius: "20px" }}>
              Follow
            </Button>
          </Box>

          <Box
            className="mt-3"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiuLf4oFxiuenJAhQlgqJq8vjTh1lxE7z9A&s"
              sx={{ width: 50, height: 50, mr: 2 }}
            />
            <Box>
              <Typography variant="body1">Aiza Khan</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                HR Manager at YerlaTech Solution
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" sx={{ borderRadius: "20px" }}>
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          width: 320,
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: 3,
        }}
      >
        <img
          src={hiring}
          alt="Job preparation illustration"
          style={{ width: "100%", height: "auto", borderRadius: "5px" }}
        />

        <List sx={{ padding: 0 }}>
          <ListItem button sx={{ padding: "2px 0" }}>
            <ListItemText primary="About Accessibility" />
          </ListItem>
          <ListItem button sx={{ padding: "2px 0" }}>
            <ListItemText primary="Help Center Privacy & Terms" />
          </ListItem>
          <ListItem button sx={{ padding: "2px 0" }}>
            <ListItemText primary="Ad Choices Advertising" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SecondarySidebar;
