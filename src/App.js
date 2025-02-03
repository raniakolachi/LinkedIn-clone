import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SecondarySidebar from "./Components/Secondary Sidebar";
import ProfileDetails from "./Components/Profile Details page";
import JobsPage from "./Components/JobsPage";
import JobDetailsPage from "./Components/JobDetailsPage"; 

function App() {
  return (
    <Router>
      <div>
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

         
          <Route path="/job-details" element={<JobDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
