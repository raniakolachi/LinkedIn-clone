import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from './Header';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { LinkedIn, Home, Work, Notifications } from '@mui/icons-material';
import HomePage from "./HomePage";
import SecondarySidebar from "./Secondary Sidebar";




function App() {
  return (
    
      <div>
        <Header></Header>
        <HomePage></HomePage>
        <SecondarySidebar></SecondarySidebar>
          
          
      </div>
    
  );
}

export default App;
