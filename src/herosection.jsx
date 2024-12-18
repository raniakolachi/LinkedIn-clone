import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Drawer from "@mui/material/Drawer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } from "./Source/store"; 
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Herosection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [products, setProducts] = useState([]); 
  const dispatch = useDispatch();
  
  const cartItems = useSelector(state => state.cart.cartItem);

  
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    setIsDrawerOpen(true); 
  };

  return (
    <>
      <Box>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
  <div>
    <Typography className="text-center text-primary " style={{ width: 300 }} variant="h6">
      Cart Contents
     
      </Typography>
  {cartItems.map((item, index) => (
    <div key={index} className="cart-item d-flex">
      <img 
      src={item?.image || item?.images?.[0] || "https://via.placeholder.com/150"} 
      alt={item?.name || item?.title || "No Name"} 
      style={{ width: '100px' }} 
    />

        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="body2">${item.price}</Typography>
        <div className="d-flex flex-column ">
          <button className="rounded-1 border-danger bg-white" onClick={() => dispatch(increaseQuantity(item))}>
            <AddIcon fontSize="small" />
          </button>
          <span>{item.quantity}</span>
          <button className="rounded-1 border-danger bg-white" onClick={() => dispatch(decreaseQuantity(item))}>
            <RemoveIcon fontSize="small" />
          </button>
       
        <button className=" text-danger rounded-1 border-danger bg-white" onClick={() => dispatch(deleteProduct(item))}>
          <DeleteIcon fontSize="small" />
        </button>
        </div>
      </div>
       
    ))}
   
  </div>
  
</Drawer>



        <Autocomplete
          className="mt-3 ms-4 mb-2"
          disablePortal
          options={["Category 1", "Category 2", "Category 3"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Categories" />}
        />

        <div className="container">
          <h2>Products:</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
                <Card className="p-2">
                  <img
                    src={product.images?.[0] || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={product.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p >Price: ${product.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        {[...Array(5)].map((_, index) => (
                          <span key={index} className="text-warning">
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="p-2 text-primary">
                        <VisibilityIcon />
                        <button
                          className="btn btn-primary ms-3"
                          onClick={() => handleAddToCart(product)} 
                        >
                          <AddIcon fontSize="small" /> Add 
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Herosection;
