import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SecondarySidebar from "./Secondary Sidebar";
import ProfileDetails from "./Profile Details page";
import JobsPage from "./JobsPage";

function App() {
  return (
    <Router>
      <div>
        {/* Common Header */}
        <Header />

       
        <Routes>
          
          <Route
            path="/"
            element={
              <div>
                <HomePage />
                <SecondarySidebar />
              </div>
            }
          />

         
          <Route path="/jobs" element={<JobsPage />} />

         
          <Route path="/profile-details" element={<ProfileDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
