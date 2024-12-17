import React, { useState, useEffect } from "react";
import herosection from "./herosection"; 
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [cart, setCart] = useState([]); 
  const [openDrawer, setOpenDrawer] = useState(false); 
  const [anchorEl, setAnchorEl] = useState(null); 

  
  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); 
  };

  const menuId = "account-menu"; 
  const renderMenu = (
    <div>
      
      <Link to="/profile">Profile</Link>
      <Link to="/account">My Account</Link>
    </div>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              My Shop
            </Typography>

           
            <Box sx={{ flexGrow: 1 }} />

           
            <IconButton size="large" color="inherit" onClick={toggleDrawer}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            
            <IconButton
              size="large"
              edge="end"
              aria-label="account"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <div style={{ width: 450, padding: 20 }}>
          <Typography variant="h6" className="text-center text-primary">
            Cart Contents
          </Typography>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <Typography key={index}>
                {product.title} - ${product.price}
              </Typography>
            ))
          ) : (
            <Typography>No items in cart</Typography>
          )}
        </div>
      </Drawer>

     
      <herosection addToCart={addToCart} />
    </>
  );
};

export default Header;
