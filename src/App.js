import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './Header';
import Signin from "./Signin";
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './Source/store';
import Herosection from "./herosection"; 

function App() {
  return (
    <Provider store={store}> 
      <div>
        <Header />
        
        <Herosection /> 
        
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
