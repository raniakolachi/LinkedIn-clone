import React from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
 
  Box,
} from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "white",
        color: "#000",
        padding: "20px 0",
        marginTop: "40px",
      }}
    >
      <div className="container">
        <Grid container spacing={3} justifyContent="center">
    
          <Grid item xs={6} md={2}>
            <Typography variant="h6">About</Typography>
            <Typography variant="body2">Accessibility</Typography>
            <Typography variant="body2">Careers</Typography>
          </Grid>

        
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Privacy & Terms</Typography>
            <Typography variant="body2">Ad Choices</Typography>
            <Typography variant="body2">Sales Solutions</Typography>
          </Grid>

        
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Marketing Solutions</Typography>
            <Typography variant="body2">Advertising</Typography>
            <Typography variant="body2">Small Business</Typography>
          </Grid>

         
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Help Center</Typography>
            <Typography variant="body2">Settings</Typography>
            <Typography variant="body2">Recommendation Transparency</Typography>
          </Grid>

        
          <Grid item xs={6} md={2} textAlign="center">
            <Box style={{ marginTop: "20px", textAlign: "center" }}>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  defaultValue="English (English)"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    width: "auto",
                    margin: "0 auto",
                  }}
                >
                  <MenuItem value="English (English)">
                    English (English)
                  </MenuItem>
                  <MenuItem value="Urdu (اردو)">Urdu (اردو)</MenuItem>
                  <MenuItem value="French (Français)">
                    French (Français)
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
